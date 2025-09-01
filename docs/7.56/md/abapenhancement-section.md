  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_framework.htm) →  [Source Code Enhancements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_enhancement.htm) →  [Explicit enhancement options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexplicit_enh_points.htm) → 

ENHANCEMENT-SECTION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement-section_shortref.htm)

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

These statements turn a section of the current program into an explicit [enhancement option](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_point_glosry.htm "Glossary Entry"), as a result of which the section can be replaced by a [source code enhancement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_enhancement_glosry.htm "Glossary Entry"). When the program is generated, exactly one [source code plug-in](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") of the assigned [enhancement implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_impl_glosry.htm "Glossary Entry"), whose [switch](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_glosry.htm "Glossary Entry") has the state stand-by or on, replaces this program section. If no switch is assigned to a source code plug-in, it is handled as if the switch has the state on.

If the addition STATIC is not specified, the source code enhancement is dynamic. In a dynamic source code enhancement, [declarative statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) are not replaced. Instead, the declarative statements of the source code plug-in are added to the declarative statements in the program section. Furthermore, only source code plug-ins whose [switches](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_glosry.htm "Glossary Entry") have the state on are respected by dynamic source code enhancements when a program is executed.

The program section may only contain complete [control structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontrol_structure_glosry.htm "Glossary Entry") and [processing blocks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocessing_block_glosry.htm "Glossary Entry"). If no suitable source code plug-in is found, the original section is executed.

enh\_id must be used to specify an ID for the enhancement option directly and this ID must be unique without the addition INCLUDE BOUND in the current [compilation unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and it must be unique with this addition in the current include program. At least one [enhancement spot](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_spot_glosry.htm "Glossary Entry") must be assigned to the enhancement option by specifying [simple enhancement spots](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensimple_enhancement_spot_glosry.htm "Glossary Entry") spot1, spot2, ....

One or more [source code plug-ins](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensource_code_plugin_glosry.htm "Glossary Entry") can be created for a single enhancement option. A source code plug-in is created by assigning an [enhancement implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_impl_glosry.htm "Glossary Entry") for the element definition in the [Enhancement Builder](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). This creates a source code plug-in with a unique ID automatically, which appears after END-ENHANCEMENT-SECTION in the editor. Initially, the plug-in contains the code to be replaced between [ENHANCEMENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement.htm) and [ENDENHANCEMENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendenhancement.htm) and the code can be overwritten there. A source code plug-in is assigned to exactly one enhancement option.

Multiple source code plug-ins of multiple enhancement implementations can be assigned to one enhancement option. If multiple source code plug-ins with the switch position on or stand-by are found when the program is executed, a [conflict resolution](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconflict_resolution_glosry.htm "Glossary Entry") is performed internally and the [conflict resolving enhancement implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconflict_resol_impl_glosry.htm "Glossary Entry") that takes precedence is used. If more than one conflict resolving enhancement implementation takes precedence or if there is no conflict resolving enhancement implementation, the conflict cannot be resolved correctly. Instead, one of the primary conflict resolving enhancement implementations or one of the conflict resolving enhancement implementations is used. Exactly which implementation is used is the same for each program execution but is otherwise undefined.

Hints

-   In the terminology of the [enhancement concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_concept_glosry.htm "Glossary Entry"), the section between ENHANCEMENT-SECTION and END-ENHANCEMENT-SECTION is both the [enhancement spot element definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_spot_def_glosry.htm "Glossary Entry") and the [enhancement spot element invocation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_spot_invoc_glosry.htm "Glossary Entry") of the enhancement option.
-   The statement ENHANCEMENT-SECTION can either be entered directly or created after a block of lines is selected by choosing Enhancements → Create Enhancement in the [Enhancement Builder](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenhancement_builder_glosry.htm "Glossary Entry"). After the program has been saved or created by choosing Enhancements → Create Enhancement, the statement can only be deleted by choosing Enhancements → Delete Enhancement.
-   The statements ENHANCEMENT-SECTION - END-ENHANCEMENT-SECTION can also be specified in a source code plug-in.

Addition 1   

... STATIC

Effect

The addition STATIC is used to define a static source code enhancement. The declarative statements of a source code plug-in are not added but replace the ones from the program section.

In a static source code enhancement, all incorporated source code plug-ins are respected when the program is executed, including those whose [switch](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_glosry.htm "Glossary Entry") has the state stand-by.

Hint

Unlike the statement [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement-point_shortref.htm), the addition STATIC of the statement ENHANCEMENT-SECTION should only be used with maximum caution when changing data declarations because a replacement takes place and not an enhancement. Application developers at SAP in particular should not use the addition STATIC at all with ENHANCEMENT-SECTION since the change will be active in the entire customer system.

Addition 2   

... INCLUDE BOUND

Effect

This addition has the same effect as it does for the statement [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapenhancement-point.htm).

Continue
[END-ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-enhancement-section.htm)