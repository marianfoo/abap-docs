---
title: "ENHANCEMENT-POINT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement-point_shortref.htm) Syntax ENHANCEMENT-POINT enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. Additions: 1. ... STATIC(#!ABAP_ADDITION_1@1@) 2. ... INCLUDE BOUND(#!ABAP_ADDITION_2@2@
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement-point.htm"
abapFile: "abapenhancement-point.htm"
keywords: ["select", "insert", "delete", "do", "while", "if", "try", "data", "abapenhancement", "point"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_enhancement.htm) →  [Explicit Enhancement Options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexplicit_enh_points.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ENHANCEMENT-POINT, ABAPENHANCEMENT-POINT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

ENHANCEMENT-POINT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement-point_shortref.htm)

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Additions:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

This statement defines an explicit [enhancement option](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_point_glosry.htm "Glossary Entry") at the current position in the program at which a [source code enhancement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") can be made. When the program is generated, the [source code plug-ins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") of the assigned [enhancement implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") that exist in the current system and that have a [switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry") in the state stand-by or on are inserted at this position.

If the addition STATIC is not specified, the source code enhancement is dynamic. This means that, when the program is executed, only those source code plug-ins are executed whose [switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry") has the state on. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

enh\_id must be used to specify an ID for the enhancement option directly and this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_spot_glosry.htm "Glossary Entry") must be assigned to the enhancement option by specifying [simple enhancement spots](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ....

Within [enhancements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_glosry.htm "Glossary Entry"), one or more [source code plug-ins](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") can be created for each enhancement option. A source code plug-in is created by the assignment of an [enhancement implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") in the [Enhancement Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). This creates an empty source code plug-in with a unique ID automatically, which appears underneath ENHANCEMENT-POINT in the ABAP Editor, where the actual enhancement can be implemented between [ENHANCEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapenhancement.htm) and [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendenhancement.htm).

A source code plug-in is assigned to exactly one enhancement option. Multiple source code plug-ins from multiple enhancement implementations can be assigned to a single enhancement option.

Hints

-   In the terminology of the [ABAP Enhancement Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_framework_glosry.htm "Glossary Entry"), the statement ENHANCEMENT-POINT includes both the [enhancement spot element definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") and the [enhancement spot invocation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry") of the enhancement option.
-   The statement ENHANCEMENT-POINT can either be entered directly or created by choosing Edit → Enhancement Operations → Create Enhancement in [Enhancement Builder](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). After the program has been saved or created using Edit → Enhancement Operations → Create Enhancement, the statement can only be deleted by choosing Edit → Enhancement Operations → Delete Enhancement.
-   In addition to the enhancement options explicitly specified by ENHANCEMENT-POINT, ABAP programs also contain [implicit enhancement options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenimplicit_enh_points.htm), which can also be enhanced using source code plug-ins.
-   The statement ENHANCEMENT-POINT can also be specified in a source code plug-in.

Addition 1   

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. In a static source code enhancement, all included source code plug-ins are respected when the program is executed, including those whose [switch](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry") has the state stand-by.

Hint

The addition STATIC is intended for the enhancement of data declarations, while the statement ENHANCEMENT-POINT without the addition STATIC is intended for the enhancement of executable code. When the statement is created using Enhancements → Create Enhancement, the addition is set according to this selection.

Addition 2   

... INCLUDE BOUND

Effect

This addition can be specified in include programs and binds the source code enhancement to the current include program. Each program that includes an include program only includes the source code enhancements that are defined using this addition. The names of the enhancement options created using the addition INCLUDE BOUND must be unique within the include program. Internally, the names of include-bound enhancement options always refer to their include program, which means there can be no naming conflicts between include programs and the [compilation unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompilation_unit_glosry.htm "Glossary Entry") when binding to a unit and no naming conflicts between multiple bound include programs.

If the addition INCLUDE BOUND is not used, a source code enhancement is assigned to only one compilation unit. If the statement ENHANCEMENT-POINT is specified in an include program without this addition, a compilation unit must be assigned to it in the Enhancement Builder.

Hints

-   In an include program, include-bound and non-include-bound source code enhancements cannot both be defined at the same time. This also applies if an include program includes other include programs.
-   In an include program that is included in the same program more than once, only include-bound source code enhancements are allowed.