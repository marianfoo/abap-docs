  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Explicit enhancement options](javascript:call_link\('abenexplicit_enh_points.htm'\)) → 

ENHANCEMENT-POINT

[Quick Reference](javascript:call_link\('abapenhancement-point_shortref.htm'\))

Syntax

ENHANCEMENT-POINT enh\_id SPOTS spot1 spot2 ...
                  *\[*STATIC*\]*
                  *\[*INCLUDE BOUND*\]*.

Extras:

[1\. ... STATIC](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE BOUND](#!ABAP_ADDITION_2@2@)

Effect

This statement defines an explicit [enhancement point](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") at the current position in the program at which a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry") can be made. When the program is generated, the [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") of the associated [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") that exist in the current system and that have a [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") in the state stand-by or on are inserted at this position.

If the addition STATIC is not specified, the source code enhancement is dynamic. This means that, when the program is executed, only those source code plug-ins are executed whose [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") has the state on. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

enh\_id requires an ID for the enhancement point to be specified directly; this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](javascript:call_link\('abenenhancement_spot_glosry.htm'\) "Glossary Entry") must be assigned to the enhancement point by specifying the values spot1, spot2, and so on, as [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry").

Within [enhancements](javascript:call_link\('abenenhancement_glosry.htm'\) "Glossary Entry"), one or more [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") can be created for each enhancement point. A source code plug-in is created by the assignment of an [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") in [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). This creates an empty source code plug-in with a unique ID automatically, which is displayed underneath ENHANCEMENT-POINT in the editor; the actual enhancement can be implemented between [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\)) and [ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\)).

A source code plug-in is assigned to exactly one enhancement point. Multiple source code plug-ins from multiple enhancement implementations can be assigned to a single enhancement point.

Notes

-   In the terminology of the [enhancement concept](javascript:call_link\('abenenhancement_concept_glosry.htm'\) "Glossary Entry"), the statement ENHANCEMENT-POINT includes both the [enhancement spot element definition](javascript:call_link\('abenenhancement_spot_def_glosry.htm'\) "Glossary Entry") and the [enhancement spot invocation](javascript:call_link\('abenenhancement_spot_invoc_glosry.htm'\) "Glossary Entry") of the enhancement point.
    
-   The statement ENHANCEMENT-POINT can either be entered directly or created by choosing Edit → Enhancement Operations → Create Enhancement in [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). After the program has been saved or created using Edit → Enhancement Operations → Create Enhancement, the statement can only be deleted by choosing Edit → Enhancement Operations → Delete Enhancement.
    
-   In addition to the enhancement points explicitly specified by ENHANCEMENT-POINT, ABAP programs also contain [implicit enhancement points](javascript:call_link\('abenimplicit_enh_points.htm'\)), which can also be enhanced using source code plug-ins.
    
-   The statement ENHANCEMENT-POINT can also be specified in a source code plug-in.
    

Addition 1

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") has the state stand-by.

Note

The addition STATIC is intended for the enhancement of data declarations, while the statement ENHANCEMENT-POINT, without the addition STATIC, is designed for the enhancement of executable code. When the statement is executed using Enhancements → Create Enhancement, the addition is set according to this selection.

Addition 2

... INCLUDE BOUND

Effect

This addition can be entered in include programs. It binds the source code enhancement to the current include program. Each program that incorporates an include program only includes the source code enhancements that are defined using this addition. The names of the enhancement points created using the addition INCLUDE BOUND must be unique within the include program. Internally, the names of include-bound enhancement points always refer to their include program, which means there can be no naming conflicts between include programs and the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") when binding to a unit and no naming conflicts between multiple bound include programs.

If the addition INCLUDE BOUND is not used, a source code enhancement is assigned to only one compilation unit. If the statement ENHANCEMENT-POINT is executed in an include program without this addition, a compilation unit must be assigned to it in Enhancement Builder.

Notes

-   In an include program, include-bound and non-include-bound source code enhancements cannot both be defined at the same time. This also applies if an include program incorporates other include programs.
    
-   In an include program that is incorporated in the same program more than once, only include-bound source code enhancements are allowed.