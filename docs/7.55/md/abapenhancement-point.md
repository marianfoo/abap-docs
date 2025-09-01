---
title: "ENHANCEMENT-POINT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapenhancement-point_shortref.htm) Syntax ENHANCEMENT-POINT enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. Additions: 1. ... STATIC(#!ABAP_ADDITION_1@1@) 2. ... INCLUDE BOUND(#!ABAP_ADDITION_2@2@
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapenhancement-point.htm"
abapFile: "abapenhancement-point.htm"
keywords: ["select", "insert", "delete", "do", "while", "if", "try", "data", "abapenhancement", "point"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensource_code_enhancement.htm) →  [Explicit enhancement options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexplicit_enh_points.htm) → 

ENHANCEMENT-POINT

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapenhancement-point_shortref.htm)

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Additions:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

This statement defines an explicit [enhancement point](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_point_glosry.htm "Glossary Entry") at the current position in the program at which a [source code enhancement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") can be made. When the program is generated, the [source code plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") of the associated [enhancement implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") that exist in the current system and that have a [switch](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_glosry.htm "Glossary Entry") in the state stand-by or on are inserted at this position.

If the addition STATIC is not specified, the source code enhancement is dynamic. This means that, when the program is executed, only those source code plug-ins are executed whose [switch](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_glosry.htm "Glossary Entry") has the state on. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

enh\_id requires an ID for the enhancement point to be specified directly; this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_spot_glosry.htm "Glossary Entry") must be assigned to the enhancement point by specifying the values spot1, spot2, and so on, as [simple enhancement spots](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry").

Within [enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_glosry.htm "Glossary Entry"), one or more [source code plug-ins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") can be created for each enhancement point. A source code plug-in is created by the assignment of an [enhancement implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") in [Enhancement Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). This creates an empty source code plug-in with a unique ID automatically, which appears underneath ENHANCEMENT-POINT in the ABAP Editor; the actual enhancement can be implemented between [ENHANCEMENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapenhancement.htm) and [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapendenhancement.htm).

A source code plug-in is assigned to exactly one enhancement point. Multiple source code plug-ins from multiple enhancement implementations can be assigned to a single enhancement point.

Hints

-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), the statement ENHANCEMENT-POINT includes both the [enhancement spot element definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") and the [enhancement spot invocation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry") of the enhancement point.

-   The statement ENHANCEMENT-POINT can either be entered directly or created by choosing Edit → Enhancement Operations → Create Enhancement in [Enhancement Builder](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). After the program has been saved or created using Edit → Enhancement Operations → Create Enhancement, the statement can only be deleted by choosing Edit → Enhancement Operations → Delete Enhancement.

-   In addition to the enhancement points explicitly specified by ENHANCEMENT-POINT, ABAP programs also contain [implicit enhancement points](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenimplicit_enh_points.htm), which can also be enhanced using source code plug-ins.

-   The statement ENHANCEMENT-POINT can also be specified in a source code plug-in.
    

Addition 1

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenswitch_glosry.htm "Glossary Entry") has the state stand-by.

Hint

The addition STATIC is intended for the enhancement of data declarations, while the statement ENHANCEMENT-POINT, without the addition STATIC, is designed for the enhancement of executable code. When the statement is executed using Enhancements → Create Enhancement, the addition is set according to this selection.

Addition 2

... INCLUDE BOUND

Effect

This addition can be entered in include programs. It binds the source code enhancement to the current include program. Each program that incorporates an include program only includes the source code enhancements that are defined using this addition. The names of the enhancement points created using the addition INCLUDE BOUND must be unique within the include program. Internally, the names of include-bound enhancement points always refer to their include program, which means there can be no naming conflicts between include programs and the [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry") when binding to a unit and no naming conflicts between multiple bound include programs.

If the addition INCLUDE BOUND is not used, a source code enhancement is assigned to only one compilation unit. If the statement ENHANCEMENT-POINT is executed in an include program without this addition, a compilation unit must be assigned to it in Enhancement Builder.

Hints

-   In an include program, include-bound and non-include-bound source code enhancements cannot both be defined at the same time. This also applies if an include program incorporates other include programs.

-   In an include program that is incorporated in the same program more than once, only include-bound source code enhancements are allowed.