<?php if (!defined('PmWiki')) exit();

/*

The MIT License (MIT)

Copyright (c) 2014 Michael J. Paulukonis http://michaelPaulukonis.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

$RecipeInfo['ToggleEdit']['Version'] = '2014-08-21';

global $toggleEditStyle, $toggleEditClass;

SDV($toggleEditStyle, 'border:1px solid #999; padding:5px;' );
SDV($toggleEditClass, 'toggleedit');

$GUIButtons['toggleedit'] = array(90, '', '', '',
   '<a href=\"#\" onclick=\"pmAddToggle(\'$toggleEditStyle\', \'$toggleEditClass\');\"><img src=\"$GUIButtonDirUrlFmt/toggle.gif\" title=\"$[toggle]\" /></a>');

$HTMLFooterFmt['toggleedit'] = '<script type="text/javascript" src="$FarmPubDirUrl/pm-toggle-edit.js"></script>';
