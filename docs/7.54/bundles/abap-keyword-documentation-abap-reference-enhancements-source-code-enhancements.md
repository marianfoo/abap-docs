# ABAP Keyword Documentation / ABAP − Reference / Enhancements / Source Code Enhancements

Included pages: 12


### abensource_code_enhancement.htm

---
title: "Source Code Enhancements"
description: |
  ABAP source code(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_source_code_glosry.htm 'Glossary Entry') can be enhanced using source code plug-ins(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm 'Glossary Entry'), as part of the
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm"
abapFile: "abensource_code_enhancement.htm"
keywords: ["do", "try", "abensource", "code", "enhancement"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) → 

Source Code Enhancements

[ABAP source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_source_code_glosry.htm "Glossary Entry") can be enhanced using [source code plug-ins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry"), as part of the [ABAP enhancement concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_concept_glosry.htm "Glossary Entry").

Source code enhancements can be made to

-   [implicit enhancement points](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenimplicit_enh_points.htm) or

-   [explicit enhancement points.](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm)

.

[Enhancement implementations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenh_implementation.htm) are implemented between special statements and are controlled by being associated with [switches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry").

Continue
[Implicit Enhancement Options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenimplicit_enh_points.htm)
[Explicit enhancement options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm)
[enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenh_implementation.htm)


### abenimplicit_enh_points.htm

---
title: "Implicit Enhancement Options"
description: |
  In addition to enhancement points(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm 'Glossary Entry') that can be created explicitly using ENHANCEMENT-POINT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm) and ENHANC
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenimplicit_enh_points.htm"
abapFile: "abenimplicit_enh_points.htm"
keywords: ["select", "do", "try", "method", "class", "abenimplicit", "enh", "points"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) → 

Implicit Enhancement Options

In addition to [enhancement points](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") that can be created explicitly using [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm) and [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm), implicit enhancement points exist in the following places in ABAP programs:

-   After the last line of the source code of executable programs, function groups, module pools, subroutine pools, and include programs.

-   Before the first and after the last line of the implementation of a procedure (after the introductory statement and before the END statement)

-   Before the first and after the last line of a [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") (after ENHANCEMENT and before ENDENHANCEMENT)

-   At the end of a visibility area in the declaration section of a local class

-   At the end of a list of formal parameters of the same name at the declaration of local methods

-   In structure definitions using BEGIN OF and END OF before the statement with the addition END OF.

The enhancement implementations for implicit enhancement options can only ever be appended to a single framework program, which means that the implicit enhancement options are not available in include programs when the following applies:

-   The include program is not included in a framework program.

-   The include program is included more than once in a framework program.

-   The include program is included in multiple programs, and none of these programs is selected as a relevant framework program in ABAP Workbench.

-   The include program is included in multiple programs and at least one of these programs contains an include-bound explicit enhancement point (that is, a point defined using the addition [INCLUDE BOUND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm)).

To make implicit enhancement points visible in ABAP Editor, choose Edit → Enhancement Operations → Show Implicit Enhancement Points. They can be enhanced by using [source code enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") in the same way as explicit enhancement points.

Notes

-   The visibility sections of global classes and the parameter interfaces of function modules and global methods also contain implicit enhancement options. These can be displayed and enhanced in Class Builder or Function Builder.

-   [AMDP methods](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry") do not have any implicit enhancement points.


### abenexplicit_enh_points.htm

---
title: "Explicit enhancement options"
description: |
  Explicit enhancement options(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm 'Glossary Entry') are created in ABAP programs by the following statements: -   ENHANCEMENT-POINT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-po
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm"
abapFile: "abenexplicit_enh_points.htm"
keywords: ["insert", "do", "try", "abenexplicit", "enh", "points"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) → 

Explicit enhancement options

Explicit [enhancement options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") are created in ABAP programs by the following statements:

-   [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm)
    Defines a position in an ABAP program as an enhancement option, at which one or more source code plug-ins can be inserted.
    

-   [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm)
    Defines a section of an ABAP program as an enhancement option, which can can be replaced by one or more source code plug-ins.

Continue
[ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm)
[ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm)


### abapenhancement-point.htm

---
title: "ENHANCEMENT-POINT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point_shortref.htm) Syntax ENHANCEMENT-POINT enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. Extras: 1. ... STATIC(#!ABAP_ADDITION_1@1@) 2. ... INCLUDE BOUND(#!ABAP_ADDITION_2@2@) E
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm"
abapFile: "abapenhancement-point.htm"
keywords: ["select", "insert", "delete", "do", "while", "if", "try", "data", "abapenhancement", "point"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) →  [Explicit enhancement options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm) → 

ENHANCEMENT-POINT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point_shortref.htm)

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Extras:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

This statement defines an explicit [enhancement point](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") at the current position in the program at which a [source code enhancement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") can be made. When the program is generated, the [source code plug-ins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") of the associated [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") that exist in the current system and that have a [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") in the state stand-by or on are inserted at this position.

If the addition STATIC is not specified, the source code enhancement is dynamic. This means that, when the program is executed, only those source code plug-ins are executed whose [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") has the state on. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

enh\_id requires an ID for the enhancement point to be specified directly; this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_glosry.htm "Glossary Entry") must be assigned to the enhancement point by specifying the values spot1, spot2, and so on, as [simple enhancement spots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry").

Within [enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_glosry.htm "Glossary Entry"), one or more [source code plug-ins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") can be created for each enhancement point. A source code plug-in is created by the assignment of an [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") in [Enhancement Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). This creates an empty source code plug-in with a unique ID automatically, which is displayed underneath ENHANCEMENT-POINT in the editor; the actual enhancement can be implemented between [ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm) and [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm).

A source code plug-in is assigned to exactly one enhancement point. Multiple source code plug-ins from multiple enhancement implementations can be assigned to a single enhancement point.

Notes

-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), the statement ENHANCEMENT-POINT includes both the [enhancement spot element definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") and the [enhancement spot invocation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry") of the enhancement point.
    
-   The statement ENHANCEMENT-POINT can either be entered directly or created by choosing Edit → Enhancement Operations → Create Enhancement in [Enhancement Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). After the program has been saved or created using Edit → Enhancement Operations → Create Enhancement, the statement can only be deleted by choosing Edit → Enhancement Operations → Delete Enhancement.
    
-   In addition to the enhancement points explicitly specified by ENHANCEMENT-POINT, ABAP programs also contain [implicit enhancement points](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenimplicit_enh_points.htm), which can also be enhanced using source code plug-ins.
    
-   The statement ENHANCEMENT-POINT can also be specified in a source code plug-in.
    

Addition 1

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") has the state stand-by.

Note

The addition STATIC is intended for the enhancement of data declarations, while the statement ENHANCEMENT-POINT, without the addition STATIC, is designed for the enhancement of executable code. When the statement is executed using Enhancements → Create Enhancement, the addition is set according to this selection.

Addition 2

... INCLUDE BOUND

Effect

This addition can be entered in include programs. It binds the source code enhancement to the current include program. Each program that incorporates an include program only includes the source code enhancements that are defined using this addition. The names of the enhancement points created using the addition INCLUDE BOUND must be unique within the include program. Internally, the names of include-bound enhancement points always refer to their include program, which means there can be no naming conflicts between include programs and the [compilation unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompilation_unit_glosry.htm "Glossary Entry") when binding to a unit and no naming conflicts between multiple bound include programs.

If the addition INCLUDE BOUND is not used, a source code enhancement is assigned to only one compilation unit. If the statement ENHANCEMENT-POINT is executed in an include program without this addition, a compilation unit must be assigned to it in Enhancement Builder.

Notes

-   In an include program, include-bound and non-include-bound source code enhancements cannot both be defined at the same time. This also applies if an include program incorporates other include programs.
    
-   In an include program that is incorporated in the same program more than once, only include-bound source code enhancements are allowed.


### abapenhancement-section.htm

---
title: "ENHANCEMENT-SECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section_shortref.htm) Syntax ENHANCEMENT-SECTION enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. ... END-ENHANCEMENT-SECTION. Extras: 1. ... STATIC(#!ABAP_ADDITION_1@1@) 2. ... INCLU
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm"
abapFile: "abapenhancement-section.htm"
keywords: ["select", "delete", "do", "if", "try", "data", "abapenhancement", "section"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) →  [Explicit enhancement options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm) → 

ENHANCEMENT-SECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section_shortref.htm)

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Extras:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

These statements turn a section of the current program into an explicit [enhancement point](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry"), as a result of which the section can be replaced by a [source code enhancement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry"). When the program is generated, exactly one [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") of the assigned [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry"), whose [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") has the state stand-by or on, replaces this program section. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

If the addition STATIC is not specified, the source code enhancement is dynamic. In a dynamic source code enhancement, [declarative statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) are not replaced. Instead, the declarative statements of the source code plug-in are added to the declarative statements in the program section. Furthermore, only source code plug-ins whose [switches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") have the state on are respected by dynamic source code enhancements when a program is executed.

The program section may only contain complete [control structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structure_glosry.htm "Glossary Entry") and [processing blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). If no suitable source code plug-in is found, the original section is executed.

enh\_id requires an ID for the enhancement point to be specified directly; this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_glosry.htm "Glossary Entry") must be assigned to the enhancement point by specifying the values spot1, spot2, and so on, as [simple enhancement spots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry").

One or more [source code plug-ins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") can be created for a single enhancement point. A source code plug-in is created by assigning an [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") for the element definition in [Enhancement Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). This creates a source code plug-in with a unique ID automatically, which is displayed after END-ENHANCEMENT-SECTION in the editor. Initially, the plug-in contains the code to be replaced between [ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm) and [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm); the code can be overwritten there. A source code plug-in is assigned to exactly one enhancement option.

Multiple source code plug-ins of multiple enhancement implementations can be assigned to one enhancement option. If multiple source code plug-ins with the switch position on or stand-by are found when the program is executed, a [conflict resolution](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_resolution_glosry.htm "Glossary Entry") is performed internally and the [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") that takes precedence is used. If more than one conflict resolving enhancement implementation takes precedence, or there is no conflict resolving enhancement implementation, the conflict cannot be resolved correctly. Instead, one of the primary conflict resolving enhancement implementations or one of the conflict resolving enhancement implementations is used. Exactly which implementation is used is the same for each program execution, but is otherwise undefined.

Notes

-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), the section between ENHANCEMENT-SECTION and END-ENHANCEMENT-SECTION is both the [enhancement spot element definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") and the [enhancement spot element invocation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry") of the enhancement point.
    
-   The statement ENHANCEMENT-SECTION can either be entered directly or created after a block of lines is selected by choosing Enhancements → Create Enhancement in [Enhancement Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). After the program has been saved or created by choosing Enhancements → Create Enhancement, the statement can only be deleted by choosing Enhancements → Delete Enhancement.
    
-   The statements ENHANCEMENT-SECTION - END-ENHANCEMENT-SECTION can also be included in a source code plug-in.
    

Addition 1

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. The declarative statements of a source code plug-in are not added, but replace the ones from the program section.

In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") has the state stand-by.

Note

Unlike the statement [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point_shortref.htm), the addition STATIC of the statement ENHANCEMENT-SECTION should only be used with maximum caution when changing data declarations. This is because a replacement is being done, not an enhancement. Application developers at SAP in particular should not use the addition STATIC at all with ENHANCEMENT-SECTION since the change will be active in the entire customer system.

Addition 2

... INCLUDE BOUND

Effect

This addition has the same effect as it does for the statement [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm).

Continue
[END-ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-enhancement-section.htm)


### abapend-enhancement-section.htm

---
title: "END-ENHANCEMENT-SECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section_shortref.htm) Syntax END-ENHANCEMENT-SECTION. Effect The statement END-ENHANCEMENT-SECTION ends an enhancement point(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-enhancement-section.htm"
abapFile: "abapend-enhancement-section.htm"
keywords: ["do", "try", "abapend", "enhancement", "section"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) →  [Explicit enhancement options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm) →  [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm) → 

END-ENHANCEMENT-SECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section_shortref.htm)

Syntax

END-ENHANCEMENT-SECTION.

Effect

The statement END-ENHANCEMENT-SECTION ends an [enhancement point](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") opened using [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm).


### abapenhancement-section.htm

---
title: "ENHANCEMENT-SECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section_shortref.htm) Syntax ENHANCEMENT-SECTION enh_id SPOTS spot1 spot2 ... STATIC INCLUDE BOUND. ... END-ENHANCEMENT-SECTION. Extras: 1. ... STATIC(#!ABAP_ADDITION_1@1@) 2. ... INCLU
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm"
abapFile: "abapenhancement-section.htm"
keywords: ["select", "delete", "do", "if", "try", "data", "abapenhancement", "section"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) →  [Explicit enhancement options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm) → 

ENHANCEMENT-SECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section_shortref.htm)

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Extras:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

These statements turn a section of the current program into an explicit [enhancement point](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry"), as a result of which the section can be replaced by a [source code enhancement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry"). When the program is generated, exactly one [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") of the assigned [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry"), whose [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") has the state stand-by or on, replaces this program section. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

If the addition STATIC is not specified, the source code enhancement is dynamic. In a dynamic source code enhancement, [declarative statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) are not replaced. Instead, the declarative statements of the source code plug-in are added to the declarative statements in the program section. Furthermore, only source code plug-ins whose [switches](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") have the state on are respected by dynamic source code enhancements when a program is executed.

The program section may only contain complete [control structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structure_glosry.htm "Glossary Entry") and [processing blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). If no suitable source code plug-in is found, the original section is executed.

enh\_id requires an ID for the enhancement point to be specified directly; this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_glosry.htm "Glossary Entry") must be assigned to the enhancement point by specifying the values spot1, spot2, and so on, as [simple enhancement spots](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry").

One or more [source code plug-ins](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") can be created for a single enhancement point. A source code plug-in is created by assigning an [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") for the element definition in [Enhancement Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). This creates a source code plug-in with a unique ID automatically, which is displayed after END-ENHANCEMENT-SECTION in the editor. Initially, the plug-in contains the code to be replaced between [ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm) and [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm); the code can be overwritten there. A source code plug-in is assigned to exactly one enhancement option.

Multiple source code plug-ins of multiple enhancement implementations can be assigned to one enhancement option. If multiple source code plug-ins with the switch position on or stand-by are found when the program is executed, a [conflict resolution](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_resolution_glosry.htm "Glossary Entry") is performed internally and the [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") that takes precedence is used. If more than one conflict resolving enhancement implementation takes precedence, or there is no conflict resolving enhancement implementation, the conflict cannot be resolved correctly. Instead, one of the primary conflict resolving enhancement implementations or one of the conflict resolving enhancement implementations is used. Exactly which implementation is used is the same for each program execution, but is otherwise undefined.

Notes

-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), the section between ENHANCEMENT-SECTION and END-ENHANCEMENT-SECTION is both the [enhancement spot element definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") and the [enhancement spot element invocation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry") of the enhancement point.
    
-   The statement ENHANCEMENT-SECTION can either be entered directly or created after a block of lines is selected by choosing Enhancements → Create Enhancement in [Enhancement Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). After the program has been saved or created by choosing Enhancements → Create Enhancement, the statement can only be deleted by choosing Enhancements → Delete Enhancement.
    
-   The statements ENHANCEMENT-SECTION - END-ENHANCEMENT-SECTION can also be included in a source code plug-in.
    

Addition 1

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. The declarative statements of a source code plug-in are not added, but replace the ones from the program section.

In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry") has the state stand-by.

Note

Unlike the statement [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point_shortref.htm), the addition STATIC of the statement ENHANCEMENT-SECTION should only be used with maximum caution when changing data declarations. This is because a replacement is being done, not an enhancement. Application developers at SAP in particular should not use the addition STATIC at all with ENHANCEMENT-SECTION since the change will be active in the entire customer system.

Addition 2

... INCLUDE BOUND

Effect

This addition has the same effect as it does for the statement [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm).

Continue
[END-ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapend-enhancement-section.htm)


### abenexplicit_enh_points.htm

---
title: "Explicit enhancement options"
description: |
  Explicit enhancement options(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm 'Glossary Entry') are created in ABAP programs by the following statements: -   ENHANCEMENT-POINT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-po
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexplicit_enh_points.htm"
abapFile: "abenexplicit_enh_points.htm"
keywords: ["insert", "do", "try", "abenexplicit", "enh", "points"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) → 

Explicit enhancement options

Explicit [enhancement options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") are created in ABAP programs by the following statements:

-   [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm)
    Defines a position in an ABAP program as an enhancement option, at which one or more source code plug-ins can be inserted.
    

-   [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm)
    Defines a section of an ABAP program as an enhancement option, which can can be replaced by one or more source code plug-ins.

Continue
[ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm)
[ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm)


### abenenh_implementation.htm

---
title: "Continue"
description: |
  ENHANCEMENT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm) ENDENHANCEMENT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm)
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenh_implementation.htm"
abapFile: "abenenh_implementation.htm"
keywords: ["do", "try", "abenenh", "implementation"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) → 

enhancement implementation

The following statements define a [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry"):

-   [ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm)

-   [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm)

Continue
[ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm)
[ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm)


### abapenhancement.htm

---
title: "ENHANCEMENT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement_shortref.htm) Syntax ENHANCEMENT id. ... ENDENHANCEMENT. Effect These statements define a source code plug-in(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm 'G
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm"
abapFile: "abapenhancement.htm"
keywords: ["do", "try", "abapenhancement"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) →  [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenh_implementation.htm) → 

ENHANCEMENT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement_shortref.htm)

Syntax

ENHANCEMENT id.
  ...
ENDENHANCEMENT.

Effect

These statements define a [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") with the ID id. A [source code enhancement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry") can be implemented between the statements. The [control structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_structure_glosry.htm "Glossary Entry") and [processing blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry") used in the implementation must be complete.

The statements ENHANCEMENT and ENDENHANCEMENT cannot be entered and edited directly. Instead, they are generated by [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry") when [enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_glosry.htm "Glossary Entry") are created as part of the [enhancement concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"). The ID id is also assigned by the workbench.

Notes

-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), a source code plug-in is an [enhancement implementation element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_impl_elem_glosry.htm "Glossary Entry") of a (simple) [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensimple_enhancement_impl_glosry.htm "Glossary Entry").
    
-   Although source code plug-ins are displayed in the same source code as the corresponding [enhancement points](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_point_glosry.htm "Glossary Entry") [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm) or [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm), they are actually stored in other [include programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry") that are managed by [Enhancement Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_builder_glosry.htm "Glossary Entry").
    
-   It is possible to enhance a source code plug-in using further source code plug-ins. This means that, from then onwards, the statements [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-point.htm) and [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement-section.htm) can be used between ENHANCEMENT and ENDENHANCEMENT.


### abapendenhancement.htm

---
title: "ENDENHANCEMENT"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement_shortref.htm) Syntax ENDENHANCEMENT. Effect The statement ENDENHANCEMENT closes a source code plug-in(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm 'Glossary
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm"
abapFile: "abapendenhancement.htm"
keywords: ["do", "try", "abapendenhancement"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) →  [enhancement implementation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenh_implementation.htm) → 

ENDENHANCEMENT

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement_shortref.htm)

Syntax

ENDENHANCEMENT.

Effect

The statement ENDENHANCEMENT closes a [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") introduced using [ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm).


### abenenh_implementation.htm

---
title: "Continue"
description: |
  ENHANCEMENT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm) ENDENHANCEMENT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm)
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenh_implementation.htm"
abapFile: "abenenh_implementation.htm"
keywords: ["do", "try", "abenenh", "implementation"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_enhancement.htm) → 

enhancement implementation

The following statements define a [source code plug-in](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensource_code_plugin_glosry.htm "Glossary Entry"):

-   [ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm)

-   [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm)

Continue
[ENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapenhancement.htm)
[ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapendenhancement.htm)
