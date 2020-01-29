import React from 'react';

const Wave = props => {

	const opt = props.opt || {};

	const phase = 0;
	const run = false;

	// UI vars

	const ratio = opt.ratio || window.devicePixelRatio || 1;

	const width = ratio * (opt.width || 320);
	const width_2 = width / 2;
	const width_4 = width / 4;

	const height = ratio * (opt.height || 100);
	const height_2 = height / 2;

	const MAX = (height_2) - 4;

	// Constructor opt

	this.amplitude = opt.amplitude || 1;
	this.speed = opt.speed || 0.2;
	this.frequency = opt.frequency || 6;
	this.color = (function hex2rgb(hex){
		var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function(m,r,g,b) { return r + r + g + g + b + b; });
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ?
		parseInt(result[1],16).toString()+','+parseInt(result[2], 16).toString()+','+parseInt(result[3], 16).toString()
		: null;
	})(opt.color || '#fff') || '255,255,255';

	// Canvas

	this.canvas = document.createElement('canvas');
	this.canvas.width = this.width;
	this.canvas.height = this.height;
	this.canvas.style.width = (this.width / this.ratio) + 'px';
	this.canvas.style.height = (this.height / this.ratio) + 'px';

	this.container = opt.container || document.body;
	this.container.appendChild(this.canvas);

	this.ctx = this.canvas.getContext('2d');

	// Start

	if (opt.autostart === true) {
		this.start();
	}
}

SiriWave.prototype._GATF_cache = {};

SiriWave.prototype._globAttFunc = function(x) {
	if (SiriWave.prototype._GATF_cache[x] == null) {
		SiriWave.prototype._GATF_cache[x] = Math.pow(4/(4+Math.pow(x,4)), 2);
	}
	return SiriWave.prototype._GATF_cache[x];
};

SiriWave.prototype._xpos = function(i) {
	return this.width_2 + i * this.width_4;
};

SiriWave.prototype._ypos = function(i, attenuation) {
	var att = (this.MAX * this.amplitude) / attenuation;
	return this.height_2 + this._globAttFunc(i) * att * Math.sin(this.frequency * i - this.phase);
}

SiriWave.prototype._drawLine = function(attenuation, color, width){
	this.ctx.moveTo(0,0);
	this.ctx.beginPath();
	this.ctx.strokeStyle = color;
	this.ctx.lineWidth = width || 1;

	var i = -2;
	while ((i += 0.01) <= 2) {
		this.ctx.lineTo(this._xpos(i), this._ypos(i, attenuation));
	}

	this.ctx.stroke();
};

SiriWave.prototype._clear = function() {
	this.ctx.globalCompositeOperation = 'destination-out';
	this.ctx.fillRect(0, 0, this.width, this.height);
	this.ctx.globalCompositeOperation = 'source-over';
};

SiriWave.prototype._draw = function() {
	if (this.run === false) return;

	this.phase = (this.phase + Math.PI*this.speed) % (2*Math.PI);

	this._clear();
	this._drawLine(-2, 'rgba(' + this.color + ',0.1)');
	this._drawLine(-6, 'rgba(' + this.color + ',0.2)');
	this._drawLine(4, 'rgba(' + this.color + ',0.4)');
	this._drawLine(2, 'rgba(' + this.color + ',0.6)');
	this._drawLine(1, 'rgba(' + this.color + ',1)', 1.5);

	requestAnimationFrame(this._draw.bind(this));
};

/* API */

SiriWave.prototype.start = function() {
	this.phase = 0;
	this.run = true;
	this._draw();
};

SiriWave.prototype.stop = function() {
	this.phase = 0;
	this.run = false;
};
};

export default Wave;