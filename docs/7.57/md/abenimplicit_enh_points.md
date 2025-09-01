  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_enhancement.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Implicit Enhancement Options, ABENIMPLICIT_ENH_POINTS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Implicit Enhancement Options

In addition to [enhancement options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_point_glosry.htm "Glossary Entry") that can be created explicitly using [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement-point.htm) and [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement-section.htm), implicit enhancement options exist in the following places in ABAP programs:

-   After the last line of the source code of executable programs, function pools, module pools, subroutine pools, and include programs.
-   Before the first and after the last line of the implementation of a procedure (after the introductory statement and in front of the END statement)
-   Before the first and after the last line of a [source code plug-in](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") (after ENHANCEMENT and in front of ENDENHANCEMENT)
-   At the end of a visibility section in the declaration part of a local class
-   At the end of a list of formal parameters of the same type at the declaration of local methods
-   In structure definitions using BEGIN OF and END OF in front of the statement with the addition END OF.

The enhancement implementations for implicit enhancement options can only ever be bound to a single compilation unit, which means that the implicit enhancement options are not available in include programs when the following applies:

-   The include program is not included in a compilation unit.
-   The include program is included more than once in a compilation unit.
-   The include program is included in multiple programs, and none of these programs is selected as a relevant master program in the ABAP Workbench.
-   The include program is included in multiple programs and at least one of these programs contains an include-bound explicit enhancement option, that is, an option defined using the addition [INCLUDE BOUND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement-point.htm).

To make implicit enhancement options visible in the ABAP Editor, choose Edit → Enhancement Operations → Show Implicit Enhancement Points. They can be enhanced by using [source code enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") in the same way as explicit enhancement options.

Hints

-   The visibility sections of global classes and the parameter interfaces of function modules and global methods also contain implicit enhancement options. These can be displayed and enhanced in the Class Builder or Function Builder.
-   [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry") do not have any implicit enhancement options.