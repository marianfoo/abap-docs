---
title: "Implicit Enhancement Options"
description: |
  In addition to enhancement points(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_point_glosry.htm 'Glossary Entry') that can be created explicitly using ENHANCEMENT-POINT(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-point.htm) and ENHANC
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenimplicit_enh_points.htm"
abapFile: "abenimplicit_enh_points.htm"
keywords: ["select", "do", "try", "method", "class", "abenimplicit", "enh", "points"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_enhancement.htm) → 

Implicit Enhancement Options

In addition to [enhancement points](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_point_glosry.htm "Glossary Entry") that can be created explicitly using [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-point.htm) and [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-section.htm), implicit enhancement points exist in the following places in ABAP programs:

-   After the last line of the source code of executable programs, function groups, module pools, subroutine pools, and include programs.

-   Before the first and after the last line of the implementation of a procedure (after the introductory statement and before the END statement)

-   Before the first and after the last line of a [source code plug-in](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") (after ENHANCEMENT and before ENDENHANCEMENT)

-   At the end of a visibility area in the declaration section of a local class

-   At the end of a list of formal parameters of the same name at the declaration of local methods

-   In structure definitions using BEGIN OF and END OF before the statement with the addition END OF.

The enhancement implementations for implicit enhancement options can only ever be appended to a single framework program, which means that the implicit enhancement options are not available in include programs when the following applies:

-   The include program is not included in a framework program.

-   The include program is included more than once in a framework program.

-   The include program is included in multiple programs, and none of these programs is selected as a relevant framework program in ABAP Workbench.

-   The include program is included in multiple programs and at least one of these programs contains an include-bound explicit enhancement point (that is, a point defined using the addition [INCLUDE BOUND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-point.htm)).

To make implicit enhancement points visible in ABAP Editor, choose Edit → Enhancement Operations → Show Implicit Enhancement Points. They can be enhanced by using [source code enhancements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") in the same way as explicit enhancement points.

Notes

-   The visibility sections of global classes and the parameter interfaces of function modules and global methods also contain implicit enhancement options. These can be displayed and enhanced in Class Builder or Function Builder.

-   [AMDP methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_method_glosry.htm "Glossary Entry") do not have any implicit enhancement points.