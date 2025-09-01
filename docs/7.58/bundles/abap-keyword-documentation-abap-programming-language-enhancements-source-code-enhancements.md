# ABAP - Keyword Documentation / ABAP - Programming Language / Enhancements / Source Code Enhancements

Included pages: 12



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abensource_code_enhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_enhancement.htm)
- [abenimplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimplicit_enh_points.htm)
- [abenexplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexplicit_enh_points.htm)
- [abapenhancement-point.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-point.htm)
- [abapenhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)
- [abapend-enhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-enhancement-section.htm)
- [abenenh_implementation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenh_implementation.htm)
- [abapenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement.htm)
- [abapendenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendenhancement.htm)

**Bundle Contains**: 9 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.959Z

---

### abensource_code_enhancement.htm

> **📖 Official SAP Documentation**: [abensource_code_enhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_enhancement.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abensource_code_enhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_enhancement.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Code%20Enhancements%2C%20ABENSOURCE_CODE_ENHANCEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Code Enhancements

[ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") can be enhanced using [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") with the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry").

Source code enhancements can be made to

-   [implicit enhancement options](javascript:call_link\('abenimplicit_enh_points.htm'\)) or
-   [explicit enhancement options](javascript:call_link\('abenexplicit_enh_points.htm'\)).

[Enhancement implementations](javascript:call_link\('abenenh_implementation.htm'\)) are implemented between special statements and are controlled by being linked with [switches](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry").

Continue
[Implicit Enhancement Options](javascript:call_link\('abenimplicit_enh_points.htm'\))
[Explicit Enhancement Options](javascript:call_link\('abenexplicit_enh_points.htm'\))
[Enhancement Implementation](javascript:call_link\('abenenh_implementation.htm'\))



**📖 Source**: [abensource_code_enhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensource_code_enhancement.htm)

### abenimplicit_enh_points.htm

> **📖 Official SAP Documentation**: [abenimplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimplicit_enh_points.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenimplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimplicit_enh_points.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Implicit%20Enhancement%20Options%2C%20ABENIMPLICIT_ENH_POINTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Implicit Enhancement Options

In addition to [enhancement options](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") that can be created explicitly using [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)) and [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)), implicit enhancement options exist in the following places in ABAP programs:

-   After the last line of the source code of executable programs, function pools, module pools, subroutine pools, and include programs.
-   Before the first and after the last line of the implementation of a procedure (after the introductory statement and in front of the END statement)
-   Before the first and after the last line of a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") (after ENHANCEMENT and in front of ENDENHANCEMENT)
-   At the end of a visibility section in the declaration part of a local class
-   At the end of a list of formal parameters of the same type at the declaration of local methods
-   In structure definitions using BEGIN OF and END OF in front of the statement with the addition END OF.

The enhancement implementations for implicit enhancement options can only ever be bound to a single compilation unit, which means that the implicit enhancement options are not available in include programs when the following applies:

-   The include program is not included in a compilation unit.
-   The include program is included more than once in a compilation unit.
-   The include program is included in multiple programs, and none of these programs is selected as a relevant master program in the ABAP Workbench.
-   The include program is included in multiple programs and at least one of these programs contains an include-bound explicit enhancement option, that is, an option defined using the addition [INCLUDE BOUND](javascript:call_link\('abapenhancement-point.htm'\)).

To make implicit enhancement options visible in the ABAP Editor, choose Edit → Enhancement Operations → Show Implicit Enhancement Points. They can be enhanced by using [source code enhancements](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") in the same way as explicit enhancement options.

Hints

-   The visibility sections of global classes and the parameter interfaces of function modules and global methods also contain implicit enhancement options. These can be displayed and enhanced in the Class Builder or Function Builder.
-   [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") do not have any implicit enhancement options.



**📖 Source**: [abenimplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenimplicit_enh_points.htm)

### abenexplicit_enh_points.htm

> **📖 Official SAP Documentation**: [abenexplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexplicit_enh_points.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenexplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexplicit_enh_points.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Explicit%20Enhancement%20Options%2C%20ABENEXPLICIT_ENH_POINTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Explicit Enhancement Options

Explicit [enhancement options](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") are created in ABAP programs by the following statements:

-   [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\))
    
    Defines a position in an ABAP program as an enhancement option, at which one or more source code plug-ins can be inserted.
    
-   [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\))
    
    Defines a section of an ABAP program as an enhancement option, which can be replaced by one or more source code plug-ins.
    

Continue
[ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\))
[ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\))



**📖 Source**: [abenexplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexplicit_enh_points.htm)

### abapenhancement-point.htm

> **📖 Official SAP Documentation**: [abapenhancement-point.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-point.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapenhancement-point.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-point.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Explicit Enhancement Options](javascript:call_link\('abenexplicit_enh_points.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENHANCEMENT-POINT%2C%20ABAPENHANCEMENT-POINT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENHANCEMENT-POINT

[Short Reference](javascript:call_link\('abapenhancement-point_shortref.htm'\))

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Additions:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

This statement defines an explicit [enhancement option](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") at the current position in the program at which a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") can be made. When the program is generated, the [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") of the assigned [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") that exist in the current system and that have a [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") in the state stand-by or on are inserted at this position.

If the addition STATIC is not specified, the source code enhancement is dynamic. This means that, when the program is executed, only those source code plug-ins are executed whose [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") has the state on. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

enh\_id must be used to specify an ID for the enhancement option directly and this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](javascript:call_link\('abenenhancement_spot_glosry.htm'\) "Glossary Entry") must be assigned to the enhancement option by specifying [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry") spot1, spot2, ....

Within [enhancements](javascript:call_link\('abenenhancement_glosry.htm'\) "Glossary Entry"), one or more [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") can be created for each enhancement option. A source code plug-in is created by the assignment of an [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") in the [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). This creates an empty source code plug-in with a unique ID automatically, which appears underneath ENHANCEMENT-POINT in the ABAP Editor, where the actual enhancement can be implemented between [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\)) and [ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\)).

A source code plug-in is assigned to exactly one enhancement option. Multiple source code plug-ins from multiple enhancement implementations can be assigned to a single enhancement option.

Hints

-   In the terminology of the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry"), the statement ENHANCEMENT-POINT includes both the [enhancement spot element definition](javascript:call_link\('abenenhancement_spot_def_glosry.htm'\) "Glossary Entry") and the [enhancement spot invocation](javascript:call_link\('abenenhancement_spot_invoc_glosry.htm'\) "Glossary Entry") of the enhancement option.
-   The statement ENHANCEMENT-POINT can either be entered directly or created by choosing Edit → Enhancement Operations → Create Enhancement in [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). After the program has been saved or created using Edit → Enhancement Operations → Create Enhancement, the statement can only be deleted by choosing Edit → Enhancement Operations → Delete Enhancement.
-   In addition to the enhancement options explicitly specified by ENHANCEMENT-POINT, ABAP programs also contain [implicit enhancement options](javascript:call_link\('abenimplicit_enh_points.htm'\)), which can also be enhanced using source code plug-ins.
-   The statement ENHANCEMENT-POINT can also be specified in a source code plug-in.

Addition 1   

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. In a static source code enhancement, all included source code plug-ins are respected when the program is executed, including those whose [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") has the state stand-by.

Hint

The addition STATIC is intended for the enhancement of data declarations, while the statement ENHANCEMENT-POINT without the addition STATIC is intended for the enhancement of executable code. When the statement is created using Enhancements → Create Enhancement, the addition is set according to this selection.

Addition 2   

... INCLUDE BOUND

Effect

This addition can be specified in include programs and binds the source code enhancement to the current include program. Each program that includes an include program only includes the source code enhancements that are defined using this addition. The names of the enhancement options created using the addition INCLUDE BOUND must be unique within the include program. Internally, the names of include-bound enhancement options always refer to their include program, which means there can be no naming conflicts between include programs and the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") when binding to a unit and no naming conflicts between multiple bound include programs.

If the addition INCLUDE BOUND is not used, a source code enhancement is assigned to only one compilation unit. If the statement ENHANCEMENT-POINT is specified in an include program without this addition, a compilation unit must be assigned to it in the Enhancement Builder.

Hints

-   In an include program, include-bound and non-include-bound source code enhancements cannot both be defined at the same time. This also applies if an include program includes other include programs.
-   In an include program that is included in the same program more than once, only include-bound source code enhancements are allowed.



**📖 Source**: [abapenhancement-point.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-point.htm)

### abapenhancement-section.htm

> **📖 Official SAP Documentation**: [abapenhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapenhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Explicit Enhancement Options](javascript:call_link\('abenexplicit_enh_points.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENHANCEMENT-SECTION%2C%20ABAPENHANCEMENT-SECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENHANCEMENT-SECTION

[Short Reference](javascript:call_link\('abapenhancement-section_shortref.htm'\))

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Additions:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

These statements turn a section of the current program into an explicit [enhancement option](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry"), as a result of which the section can be replaced by a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry"). When the program is generated, exactly one [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") of the assigned [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry"), whose [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") has the state stand-by or on, replaces this program section. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

If the addition STATIC is not specified, the source code enhancement is dynamic. In a dynamic source code enhancement, [declarative statements](javascript:call_link\('abenabap_declarations.htm'\)) are not replaced. Instead, the declarative statements of the source code plug-in are added to the declarative statements in the program section. Furthermore, only source code plug-ins whose [switches](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") have the state on are respected by dynamic source code enhancements when a program is executed.

The program section may only contain complete [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry") and [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"). If no suitable source code plug-in is found, the original section is executed.

enh\_id must be used to specify an ID for the enhancement option directly and this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](javascript:call_link\('abenenhancement_spot_glosry.htm'\) "Glossary Entry") must be assigned to the enhancement option by specifying [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry") spot1, spot2, ....

One or more [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") can be created for a single enhancement option. A source code plug-in is created by assigning an [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") for the element definition in the [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). This creates a source code plug-in with a unique ID automatically, which appears after END-ENHANCEMENT-SECTION in the editor. Initially, the plug-in contains the code to be replaced between [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\)) and [ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\)) and the code can be overwritten there. A source code plug-in is assigned to exactly one enhancement option.

Multiple source code plug-ins of multiple enhancement implementations can be assigned to one enhancement option. If multiple source code plug-ins with the switch position on or stand-by are found when the program is executed, a [conflict resolution](javascript:call_link\('abenconflict_resolution_glosry.htm'\) "Glossary Entry") is performed internally and the [conflict resolving enhancement implementation](javascript:call_link\('abenconflict_resol_impl_glosry.htm'\) "Glossary Entry") that takes precedence is used. If more than one conflict resolving enhancement implementation takes precedence or if there is no conflict resolving enhancement implementation, the conflict cannot be resolved correctly. Instead, one of the primary conflict resolving enhancement implementations or one of the conflict resolving enhancement implementations is used. Exactly which implementation is used is the same for each program execution but is otherwise undefined.

Hints

-   In the terminology of the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry"), the section between ENHANCEMENT-SECTION and END-ENHANCEMENT-SECTION is both the [enhancement spot element definition](javascript:call_link\('abenenhancement_spot_def_glosry.htm'\) "Glossary Entry") and the [enhancement spot element invocation](javascript:call_link\('abenenhancement_spot_invoc_glosry.htm'\) "Glossary Entry") of the enhancement option.
-   The statement ENHANCEMENT-SECTION can either be entered directly or created after a block of lines is selected by choosing Enhancements → Create Enhancement in the [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). After the program has been saved or created by choosing Enhancements → Create Enhancement, the statement can only be deleted by choosing Enhancements → Delete Enhancement.
-   The statements ENHANCEMENT-SECTION - END-ENHANCEMENT-SECTION can also be specified in a source code plug-in.

Addition 1   

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. The declarative statements of a source code plug-in are not added but replace the ones from the program section.

In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") has the state stand-by.

Hint

Unlike the statement [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point_shortref.htm'\)), the addition STATIC of the statement ENHANCEMENT-SECTION should only be used with maximum caution when changing data declarations because a replacement takes place and not an enhancement. Application developers at SAP in particular should not use the addition STATIC at all with ENHANCEMENT-SECTION since the change will be active in the entire customer system.

Addition 2   

... INCLUDE BOUND

Effect

This addition has the same effect as it does for the statement [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)).

Continue
[END-ENHANCEMENT-SECTION](javascript:call_link\('abapend-enhancement-section.htm'\))



**📖 Source**: [abapenhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)

### abapend-enhancement-section.htm

> **📖 Official SAP Documentation**: [abapend-enhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-enhancement-section.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapend-enhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-enhancement-section.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Explicit Enhancement Options](javascript:call_link\('abenexplicit_enh_points.htm'\)) →  [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20END-ENHANCEMENT-SECTION%2C%20ABAPEND-ENHANCEMENT-SECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

END-ENHANCEMENT-SECTION

[Short Reference](javascript:call_link\('abapenhancement-section_shortref.htm'\))

Syntax

END-ENHANCEMENT-SECTION.

Effect

The statement END-ENHANCEMENT-SECTION ends an [enhancement option](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") opened using [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)).



**📖 Source**: [abapend-enhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapend-enhancement-section.htm)

### abapenhancement-section.htm

> **📖 Official SAP Documentation**: [abapenhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapenhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Explicit Enhancement Options](javascript:call_link\('abenexplicit_enh_points.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENHANCEMENT-SECTION%2C%20ABAPENHANCEMENT-SECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENHANCEMENT-SECTION

[Short Reference](javascript:call_link\('abapenhancement-section_shortref.htm'\))

Syntax

ENHANCEMENT-SECTION enh\_id SPOTS spot1 spot2 ...
                    *\[*STATIC*\]*
                    *\[*INCLUDE BOUND*\]*.
  ...
END-ENHANCEMENT-SECTION.

Additions:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

These statements turn a section of the current program into an explicit [enhancement option](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry"), as a result of which the section can be replaced by a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry"). When the program is generated, exactly one [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") of the assigned [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry"), whose [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") has the state stand-by or on, replaces this program section. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

If the addition STATIC is not specified, the source code enhancement is dynamic. In a dynamic source code enhancement, [declarative statements](javascript:call_link\('abenabap_declarations.htm'\)) are not replaced. Instead, the declarative statements of the source code plug-in are added to the declarative statements in the program section. Furthermore, only source code plug-ins whose [switches](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") have the state on are respected by dynamic source code enhancements when a program is executed.

The program section may only contain complete [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry") and [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"). If no suitable source code plug-in is found, the original section is executed.

enh\_id must be used to specify an ID for the enhancement option directly and this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](javascript:call_link\('abenenhancement_spot_glosry.htm'\) "Glossary Entry") must be assigned to the enhancement option by specifying [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry") spot1, spot2, ....

One or more [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") can be created for a single enhancement option. A source code plug-in is created by assigning an [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") for the element definition in the [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). This creates a source code plug-in with a unique ID automatically, which appears after END-ENHANCEMENT-SECTION in the editor. Initially, the plug-in contains the code to be replaced between [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\)) and [ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\)) and the code can be overwritten there. A source code plug-in is assigned to exactly one enhancement option.

Multiple source code plug-ins of multiple enhancement implementations can be assigned to one enhancement option. If multiple source code plug-ins with the switch position on or stand-by are found when the program is executed, a [conflict resolution](javascript:call_link\('abenconflict_resolution_glosry.htm'\) "Glossary Entry") is performed internally and the [conflict resolving enhancement implementation](javascript:call_link\('abenconflict_resol_impl_glosry.htm'\) "Glossary Entry") that takes precedence is used. If more than one conflict resolving enhancement implementation takes precedence or if there is no conflict resolving enhancement implementation, the conflict cannot be resolved correctly. Instead, one of the primary conflict resolving enhancement implementations or one of the conflict resolving enhancement implementations is used. Exactly which implementation is used is the same for each program execution but is otherwise undefined.

Hints

-   In the terminology of the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry"), the section between ENHANCEMENT-SECTION and END-ENHANCEMENT-SECTION is both the [enhancement spot element definition](javascript:call_link\('abenenhancement_spot_def_glosry.htm'\) "Glossary Entry") and the [enhancement spot element invocation](javascript:call_link\('abenenhancement_spot_invoc_glosry.htm'\) "Glossary Entry") of the enhancement option.
-   The statement ENHANCEMENT-SECTION can either be entered directly or created after a block of lines is selected by choosing Enhancements → Create Enhancement in the [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). After the program has been saved or created by choosing Enhancements → Create Enhancement, the statement can only be deleted by choosing Enhancements → Delete Enhancement.
-   The statements ENHANCEMENT-SECTION - END-ENHANCEMENT-SECTION can also be specified in a source code plug-in.

Addition 1   

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. The declarative statements of a source code plug-in are not added but replace the ones from the program section.

In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") has the state stand-by.

Hint

Unlike the statement [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point_shortref.htm'\)), the addition STATIC of the statement ENHANCEMENT-SECTION should only be used with maximum caution when changing data declarations because a replacement takes place and not an enhancement. Application developers at SAP in particular should not use the addition STATIC at all with ENHANCEMENT-SECTION since the change will be active in the entire customer system.

Addition 2   

... INCLUDE BOUND

Effect

This addition has the same effect as it does for the statement [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)).

Continue
[END-ENHANCEMENT-SECTION](javascript:call_link\('abapend-enhancement-section.htm'\))



**📖 Source**: [abapenhancement-section.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement-section.htm)

### abenexplicit_enh_points.htm

> **📖 Official SAP Documentation**: [abenexplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexplicit_enh_points.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenexplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexplicit_enh_points.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Explicit%20Enhancement%20Options%2C%20ABENEXPLICIT_ENH_POINTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Explicit Enhancement Options

Explicit [enhancement options](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") are created in ABAP programs by the following statements:

-   [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\))
    
    Defines a position in an ABAP program as an enhancement option, at which one or more source code plug-ins can be inserted.
    
-   [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\))
    
    Defines a section of an ABAP program as an enhancement option, which can be replaced by one or more source code plug-ins.
    

Continue
[ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\))
[ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\))



**📖 Source**: [abenexplicit_enh_points.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexplicit_enh_points.htm)

### abenenh_implementation.htm

> **📖 Official SAP Documentation**: [abenenh_implementation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenh_implementation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenenh_implementation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenh_implementation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Enhancement%20Implementation%2C%20ABENENH_IMPLEMENTATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Enhancement Implementation

The following statements define a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry"):

-   [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\))
-   [ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\))

Continue
[ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\))
[ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\))



**📖 Source**: [abenenh_implementation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenh_implementation.htm)

### abapenhancement.htm

> **📖 Official SAP Documentation**: [abapenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Enhancement Implementation](javascript:call_link\('abenenh_implementation.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENHANCEMENT%2C%20ABAPENHANCEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENHANCEMENT

[Short Reference](javascript:call_link\('abapenhancement_shortref.htm'\))

Syntax

ENHANCEMENT id.
  ...
ENDENHANCEMENT.

Effect

These statements define a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") with the ID id. A [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") can be implemented between the statements. The [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry") and [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") used in the implementation must be complete.

The statements ENHANCEMENT and ENDENHANCEMENT cannot be entered and edited directly. Instead, they are generated by the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") when [enhancements](javascript:call_link\('abenenhancement_glosry.htm'\) "Glossary Entry") are created with the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry"). The ID id is also assigned by the workbench.

Hints

-   In the terminology of the [ABAP Enhancement Framework](javascript:call_link\('abenenhancement_framework_glosry.htm'\) "Glossary Entry"), a source code plug-in is an [enhancement implementation element](javascript:call_link\('abenenhancement_impl_elem_glosry.htm'\) "Glossary Entry") of a simple [enhancement implementation](javascript:call_link\('abensimple_enhancement_impl_glosry.htm'\) "Glossary Entry").
-   Although source code plug-ins appear in the same source code as the corresponding [enhancement options](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)) or [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)) in the ABAP Editor, they are actually stored in other [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") that are managed by the [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry").
-   It is possible to enhance a source code plug-in using further source code plug-ins. This means that, from then onwards, the statements [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)) and [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\)) can be used between ENHANCEMENT and ENDENHANCEMENT.



**📖 Source**: [abapenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapenhancement.htm)

### abapendenhancement.htm

> **📖 Official SAP Documentation**: [abapendenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendenhancement.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapendenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendenhancement.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Enhancement Implementation](javascript:call_link\('abenenh_implementation.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ENDENHANCEMENT%2C%20ABAPENDENHANCEMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ENDENHANCEMENT

[Short Reference](javascript:call_link\('abapenhancement_shortref.htm'\))

Syntax

ENDENHANCEMENT.

Effect

The statement ENDENHANCEMENT closes a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") introduced using [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\)).



**📖 Source**: [abapendenhancement.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendenhancement.htm)

### abenenh_implementation.htm

> **📖 Official SAP Documentation**: [abenenh_implementation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenh_implementation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenenh_implementation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenh_implementation.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenenh_implementation.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenh_implementation.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Enhancement%20Implementation%2C%20ABENENH_IMPLEMENTATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Enhancement Implementation

The following statements define a [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry"):

-   [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\))
-   [ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\))

Continue
[ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\))
[ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\))
