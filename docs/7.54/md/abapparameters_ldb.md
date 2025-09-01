  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_abap_statements.htm) →  [Statements in Logical Databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_statements.htm) → 

PARAMETERS - ldb\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_shortref.htm)

Obsolete Syntax

... FOR *{*TABLE*|*NODE*}* node
    *\[*HELP-REQUEST*\]*
    *\[*VALUE-REQUEST*\]*
    *\[*AS SEARCH PATTERN*\]* ...

Extras:

[1\. ... FOR *{*TABLE*|*NODE*}* node](#!ABAP_ADDITION_1@1@)
[2\. ... HELP-REQUEST](#!ABAP_ADDITION_2@2@)
[3\. ... VALUE-REQUEST](#!ABAP_ADDITION_3@3@)
[4\. ... AS SEARCH PATTERN](#!ABAP_ADDITION_4@4@)

Effect

These additions for the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters.htm) are only possible in the [selection include](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_statements.htm) of a [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). They must be used to assign a node in the logical database to the parameter. Subroutines for self-defined helps can be called and a special parameter can be defined for evaluating the search help associated with the logical database.

Note

If logical databases are no longer created, these additions of the statement PARAMETERS no longer need to be used either.

Addition 1

... FOR *{*TABLE*|*NODE*}* node

Effect

With this addition, the parameter has to be assigned to a node of the structure of the logical database. If a node belongs to type T, the addition TABLE can be used instead of NODE. For a description of the node types, see the statement [NODES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnodes.htm).

When the [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") of an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") associated with the logical database is generated, input fields are created only for those parameters for which an [interface work area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") for the assigned node (or a node beneath it in the hierarchy) is declared using NODES or [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm) in the executable program. When using the function module LDB\_PROCESS, the assigned node node must be requested so that the parameter appears on the selection screen.

Addition 2

... HELP-REQUEST

Effect

This addition specifies that the subroutine para\_hlp (where para is the name of the parameter) of the [database program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database is called if the user selects the F1 field help for a screen element of the parameter on the selection screen. If the subroutine is not available, the addition is ingored.

If the parameter is defined in ABAP Dictionary with a reference to a data type, the field help that is defined there is not displayed.

Note

In the called subroutine, the field help display can be programmed or called using suitable function modules, such as HELP\_OBJECT\_SHOW. When the user chooses the input help, this does not trigger any other [selection screen events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") and there is no automatic pass by value between the selection screen and the program.

Addition 3

... VALUE-REQUEST

Effect

This addition specifies that the subroutine para\_val (where para is the name of the parameter) of the [database program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database is called if the user selects the F4 input help on a screen element of the parameter on the [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The input help key is displayed for the input field of the parameter on the selection screen. If the subroutine is not available, the addition is ingored.

If the parameter is defined in ABAP Dictionary with a reference to a data type, the input help that is defined there is not displayed.

Note

In the called subroutine, the input help display can be programmed or called using suitable function modules such as F4IF\_INT\_TABLE\_VALUE\_REQUEST. If the input help is selected, no other selection screen events are triggered and there is no automatic pass by value between the selection screen and the program. Suitable function modules must be used for this, as with general [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynp_field_help.htm). The parameter that is changed in the subroutine is transported to the selection screen.

Addition 4

... AS SEARCH PATTERN

Effect

This addition enables a search help to be evaluated in the [database program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_program_glosry.htm "Glossary Entry"). To do this, the logical database has to be assigned to a search help in transaction SE36. Except for the mandatory addition FOR TABLE*|*NODE, the addition AS SEARCH PATTERN can only be combined with the addition [MODIF ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapparameters_screen.htm). In particular, a type cannot be defined with the addition TYPE.

The data type of the parameter is the internal table SYLDB\_SP from the [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") SYLDB. This table has three columns: HOTKEY (search help ID), STRING (search string), and TRANGE ( [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") data type for complex search helps). The [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") displays an outlined block with the title "Selection using search help", which contains input fields for the search help ID and the search string as well as a pushbutton for complex search helps.

After the [selection screen has been processed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"), the list of values provided by the search help is available in the internal table ldb\_SP in the database program. Instead of the PUT\_root subroutine, the PUT\_ldb\_SP subroutine is called. Here, "ldb" is the name of the logical database and "root" is the name of the root node. This subroutine can read the actual data using the list of values in ldb\_SP and can then call the subroutine PUT\_root, where the event [GET root](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget-.htm) is raised by the statement [PUT root](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapput.htm).

Note

See also [Logical Databases - Associations with Search Helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenldb_search_help.htm).