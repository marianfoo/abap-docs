  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.6A](javascript:call_link\('abennews-46a.htm'\)) → 

Debugger in Release 4.6A

In Release 4.6A, the following functions were added to ABAP Debugger:

[1\. Editing strings](#!ABAP_MODIFICATION_1@1@)
[2\. Enhancements in ABAP Objects](#!ABAP_MODIFICATION_2@2@)
[3\. Other](#!ABAP_MODIFICATION_3@3@)

Modification 1

Editing Strings

The display of the data types string and xstring can now be scrolled. The cursor can be positioned on the string by double-clicking it. It is also possible to declare strings as watchpoints.

Modification 2

Enhancements in ABAP Objects

[Static attributes](javascript:call_link\('abenstatic_attribute_glosry.htm'\) "Glossary Entry") and handlers of [static events](javascript:call_link\('abenstatic_event_glosry.htm'\) "Glossary Entry") can now be displayed without specifying an instance. It is also possible to find all references to a specific object. The same applies to data references.

Modification 3

Other

The 'System Debugging' setting is saved too when breakpoints are saved. Furthermore, the new 'Last [Short Dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry")' button makes it possible to display the last runtime error created. This can also be done using the transaction LAST\_SHORTDUMP.