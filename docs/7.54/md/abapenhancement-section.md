  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Enhancements](javascript:call_link\('abenenhancement_framework.htm'\)) →  [Source Code Enhancements](javascript:call_link\('abensource_code_enhancement.htm'\)) →  [Explicit enhancement options](javascript:call_link\('abenexplicit_enh_points.htm'\)) → 

ENHANCEMENT-SECTION

[Quick Reference](javascript:call_link\('abapenhancement-section_shortref.htm'\))

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

These statements turn a section of the current program into an explicit [enhancement point](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry"), as a result of which the section can be replaced by a [source code enhancement](javascript:call_link\('abensource_code_enhancement_glosry.htm'\) "Glossary Entry"). When the program is generated, exactly one [source code plug-in](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") of the assigned [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry"), whose [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") has the state stand-by or on, replaces this program section. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

If the addition STATIC is not specified, the source code enhancement is dynamic. In a dynamic source code enhancement, [declarative statements](javascript:call_link\('abenabap_declarations.htm'\)) are not replaced. Instead, the declarative statements of the source code plug-in are added to the declarative statements in the program section. Furthermore, only source code plug-ins whose [switches](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") have the state on are respected by dynamic source code enhancements when a program is executed.

The program section may only contain complete [control structures](javascript:call_link\('abencontrol_structure_glosry.htm'\) "Glossary Entry") and [processing blocks](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry"). If no suitable source code plug-in is found, the original section is executed.

enh\_id requires an ID for the enhancement point to be specified directly; this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](javascript:call_link\('abenenhancement_spot_glosry.htm'\) "Glossary Entry") must be assigned to the enhancement point by specifying the values spot1, spot2, and so on, as [simple enhancement spots](javascript:call_link\('abensimple_enhancement_spot_glosry.htm'\) "Glossary Entry").

One or more [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") can be created for a single enhancement point. A source code plug-in is created by assigning an [enhancement implementation](javascript:call_link\('abenenhancement_impl_glosry.htm'\) "Glossary Entry") for the element definition in [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). This creates a source code plug-in with a unique ID automatically, which is displayed after END-ENHANCEMENT-SECTION in the editor. Initially, the plug-in contains the code to be replaced between [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\)) and [ENDENHANCEMENT](javascript:call_link\('abapendenhancement.htm'\)); the code can be overwritten there. A source code plug-in is assigned to exactly one enhancement option.

Multiple source code plug-ins of multiple enhancement implementations can be assigned to one enhancement option. If multiple source code plug-ins with the switch position on or stand-by are found when the program is executed, a [conflict resolution](javascript:call_link\('abenconflict_resolution_glosry.htm'\) "Glossary Entry") is performed internally and the [conflict resolving enhancement implementation](javascript:call_link\('abenconflict_resol_impl_glosry.htm'\) "Glossary Entry") that takes precedence is used. If more than one conflict resolving enhancement implementation takes precedence, or there is no conflict resolving enhancement implementation, the conflict cannot be resolved correctly. Instead, one of the primary conflict resolving enhancement implementations or one of the conflict resolving enhancement implementations is used. Exactly which implementation is used is the same for each program execution, but is otherwise undefined.

Notes

-   In the terminology of the [enhancement concept](javascript:call_link\('abenenhancement_concept_glosry.htm'\) "Glossary Entry"), the section between ENHANCEMENT-SECTION and END-ENHANCEMENT-SECTION is both the [enhancement spot element definition](javascript:call_link\('abenenhancement_spot_def_glosry.htm'\) "Glossary Entry") and the [enhancement spot element invocation](javascript:call_link\('abenenhancement_spot_invoc_glosry.htm'\) "Glossary Entry") of the enhancement point.
    
-   The statement ENHANCEMENT-SECTION can either be entered directly or created after a block of lines is selected by choosing Enhancements → Create Enhancement in [Enhancement Builder](javascript:call_link\('abenenhancement_builder_glosry.htm'\) "Glossary Entry"). After the program has been saved or created by choosing Enhancements → Create Enhancement, the statement can only be deleted by choosing Enhancements → Delete Enhancement.
    
-   The statements ENHANCEMENT-SECTION - END-ENHANCEMENT-SECTION can also be included in a source code plug-in.
    

Addition 1

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. The declarative statements of a source code plug-in are not added, but replace the ones from the program section.

In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") has the state stand-by.

Note

Unlike the statement [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point_shortref.htm'\)), the addition STATIC of the statement ENHANCEMENT-SECTION should only be used with maximum caution when changing data declarations. This is because a replacement is being done, not an enhancement. Application developers at SAP in particular should not use the addition STATIC at all with ENHANCEMENT-SECTION since the change will be active in the entire customer system.

Addition 2

... INCLUDE BOUND

Effect

This addition has the same effect as it does for the statement [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\)).

Continue
[END-ENHANCEMENT-SECTION](javascript:call_link\('abapend-enhancement-section.htm'\))