//COLOR 1

function getColor1 {

}
$color1 = get_field( "color_1" );

$name1 = get_field( "color_name_1" );
$hex1 = get_field( "color_hex_1" );
$rgb1 = get_field( "color_rgb_1" );
$hsl1 = get_field( "color_hsl_1" );

$color1a = get_field( "color_1a" );
$name1a = get_field( "color_name_1a" );
$hex1a = get_field( "color_hex_1a" );
$rgb1a = get_field( "color_rgb_1a" );
$hsl1a = get_field( "color_hsl_1a" );

$color1b = get_field( "color_1b" );
$name1b = get_field( "color_name_1b" );
$hex1b = get_field( "color_hex_1b" );
$rgb1b = get_field( "color_rgb_1b" );
$hsl1b = get_field( "color_hsl_1b" );

$color1c = get_field( "color_1c" );
$name1c = get_field( "color_name_1c" );
$hex1c = get_field( "color_hex_1c" );
$rgb1c = get_field( "color_rgb_1c" );
$hsl1c = get_field( "color_hsl_1c" );

$color1d = get_field( "color_1d" );
$name1d = get_field( "color_name_1d" );
$hex1d = get_field( "color_hex_1d" );
$rgb1d = get_field( "color_rgb_1d" );
$hsl1d = get_field( "color_hsl_1d" );

//COLOR 1

$color2 = get_field( "color_2" );
$name2 = get_field( "color_name_2" );
$hex2 = get_field( "color_hex_2" );
$rgb2 = get_field( "color_rgb_2" );
$hsl2 = get_field( "color_hsl_2" );

$color2a = get_field( "color_2a" );
$name2a = get_field( "color_name_2a" );
$hex2a = get_field( "color_hex_2a" );
$rgb2a = get_field( "color_rgb_2a" );
$hsl2a = get_field( "color_hsl_2a" );

$color2b = get_field( "color_2b" );
$name2b = get_field( "color_name_2b" );
$hex2b = get_field( "color_hex_2b" );
$rgb2b = get_field( "color_rgb_2b" );
$hsl2b = get_field( "color_hsl_2b" );

$color2c = get_field( "color_2c" );
$name2c = get_field( "color_name_2c" );
$hex2c = get_field( "color_hex_2c" );
$rgb2c = get_field( "color_rgb_2c" );
$hsl2c = get_field( "color_hsl_2c" );

$color2d = get_field( "color_2d" );
$name2d = get_field( "color_name_2d" );
$hex2d = get_field( "color_hex_2d" );
$rgb2d = get_field( "color_rgb_2d" );
$hsl2d = get_field( "color_hsl_2d" );

add_shortcode('color1', 'show_color_1');

function show_color_1() {
    $color = get_field( "color1", option);
    $content = '';
	
    if (have_rows('color1', 'option')) {
        while (have_rows('color1', 'option')) {
            the_row();

            $name = get_sub_field('name');
            $role = get_sub_field('role');
            $hex = get_sub_field('hex');
            $rgb = get_sub_field('rgb');
            $hsl = get_sub_field('hsl');
			
            $content .= '<li>' . $item . '</li>'; 
            $content .= '<div class="' . $color . ' color d-flex flex-column justify-content-center text-light">
                                <div class="specs d-flex flex-column">
                                    <span class="name">' . $name . '</span>
                                    <span class="role">' . $role . '</span>
                                    <span class="hex spec">' . $hex . '</span>
                                    <span class="rgb spec">' . $rgb . '</span>
                                    <span class="hsl spec">' . $hsl . '</span>
                                </div>
                            </div>';

                }
    }
    return $content;
}

