  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Debugger in Release 4.6A

For Release 4.6A, the ABAP Debugger has been enhanced to include the following functions:

[1\. String processing](#!ABAP_MODIFICATION_1@1@)

[2\. Enhancements in ABAP Objects](#!ABAP_MODIFICATION_2@2@)

[3\. Other features](#!ABAP_MODIFICATION_3@3@)

Modification 1

String Processing

The display of the data types string and xstring can now be scrolled. You can position the cursor on the string by double-clicking it. Also, you can declare strings as watchpoints.

Modification 2

Enhancements in ABAP Objects

[Static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") and handlers of [static events](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry") can now be displayed without specifying an instance. You can also find all references to a specific object. The same is valid for data references.

Modification 3

Other Features

The 'System Debugging' setting is also saved when you save breakpoints. A new pushbutton called 'Last [Short Dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry")' is now available, which you can use to display the last runtime error generated. Alternatively, you can use transaction 'last\_shortdump'.