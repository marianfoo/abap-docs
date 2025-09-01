  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) → 

Implicit Enhancement Points

In addition to [enhancement points](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") that can be created explicitly using [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)) and [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)), implicit enhancement points exist in the following places in ABAP programs:

-   After the last line of the source code of executable programs, function groups, module pools, subroutine pools, and include programs.

-   Before the first and after the last line of the implementation of a procedure (after the introductory statement and before the END statement)

-   Before the first and after the last line of a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") (after ENHANCEMENT and before ENDENHANCEMENT)

-   At the end of a visibility section in the declaration part of a local class

-   At the end of a list of formal parameters of the same name at the declaration of local methods

-   In structure definitions using BEGIN OF and END OF before the statement with the addition END OF.

The enhancement implementations for implicit enhancement points can only ever be appended to a single master program, which means that the implicit enhancement points are not available in include programs when the following applies:

-   The include program is not included in a master program.

-   The include program is included more than once in a master program.

-   The include program is included in multiple programs, and none of these programs is selected as a relevant master program in ABAP Workbench.

-   The include program is included in multiple programs and at least one of these programs contains an include-bound explicit enhancement point (that is, a point defined using the addition [INCLUDE BOUND](javascript:call_link\('abapenhancement-point.htm'\))).

To make implicit enhancement points visible in ABAP Editor, choose Edit → Enhancement Operations → Show Implicit Enhancement Points. They can be enhanced by using [source code enhancements](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") in the same way as explicit enhancement points.

Notes

-   The visibility sections of global classes and the parameter interfaces of function modules and global methods also contain implicit enhancement points. These can be displayed and enhanced in Class Builder or Function Builder.

-   [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") do not have any implicit enhancement points.