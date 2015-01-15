module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-karma');	

	grunt.initConfig({

			connect: {
		      options: {
		        base: 'app/',
		        hostname: 'localhost'
		      },
		           
		      webserver: {
		        options: {
		          port: 8000,
		          keepalive: true,		          
				}
		     },		        
		      devserver: {
		        options: {
		          port: 8888
		        }
		      },
		      testserver: {
		        options: {
		          port: 9999,
		          keepalive: true		          
		        }
		      },
		      coverage: {
		        options: {
		          base: 'coverage/',
		          port: 5555,
		          keepalive: true
		        }
		    }
	    },	    	    

		watch: {		
			scripts: {
				files: 'app/scripts/*.js',
				task: ['jshint'],
				options: {
					livereload: true		      
			    }
			},
			stylesheets: {
				files: 'app/stylesheets/css/*.css',
				task: ['csslint'],
				options: {
					livereload: true		      
			    }
			},
			views: {
				files: 'app/views/*.html'				
			},
			test: {
				files: 'test/*.js',				
				options: {
					livereload: true		      
			    }	
			},
			configFiles: {
				files: ['Gruntfile.js', 'test/karma.config.js'],				
				options: {
					livereload: true		      
			    }
			}		 
		}		
	});

	// default task
	grunt.registerTask('default', ['watch']);

	//server task
	grunt.registerTask('serve', ['connect:webserver']);	
	
};