<?php

$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	include_once $composer_autoload;
	$timber = new Timber\Timber();
}

/**
 * This ensures that Timber is loaded and available as a PHP class.
 * If not, it gives an error message to help direct developers on where to activate
 */
if ( ! class_exists( 'Timber' ) ) {

	add_action(
		'admin_notices',
		function () {
			echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php' ) ) . '</a></p></div>';
		}
	);

	add_filter(
		'template_include',
		function ( $template ) {
			return get_stylesheet_directory() . '/static/no-timber.html';
		}
	);
	return;
}


class LibrarySite extends Timber\Site {

	public function __construct() {
		add_action( 'acf/init', array( $this, 'my_acf_init' ) );
		parent::__construct();
	}


	public function my_acf_init() {

	// check function exists
	if ( function_exists( 'acf_register_block' ) ) {

		// register blocks here

		// libraries search widget block
		acf_register_block(
			array(
				'name'            => 'libraries-search',
				'title'           => 'Libraries Search',
				'description'     => 'A custom block for searching libraries.',
				'render_template' => '/src/twig/components/libraries-search/libraries-search.twig',
				'category'        => 'embdeds',
				'icon'            => file_get_contents( get_template_directory() . '/src/images/svg/c.svg' ),
				'mode'            => 'edit',
				'keywords'        => array( 'library', 'search' ),
			)
		);
	}
}
}

new LibrarySite();

/**
 * Enqueue scripts and styles.
 */
function advancement_theme_scripts() {
	// remove parent
	wp_dequeue_style( 'hvh' );

	// child
	wp_enqueue_style( 'child_css', get_stylesheet_directory_uri() . '/dist/styles/scripts.css', array(), date( 'H:i:s' ) );
	wp_enqueue_script( 'child_scripts', get_stylesheet_directory_uri() . '/dist/scripts.js', array(), date( 'H:i:s' ), true );
}
add_action( 'wp_enqueue_scripts', 'advancement_theme_scripts', 100 );
