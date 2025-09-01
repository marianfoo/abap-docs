  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PARAMETERS, ldb_options, ABAPPARAMETERS_LDB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

PARAMETERS, ldb\_options

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_shortref.htm)

Obsolete Syntax

... FOR *{*TABLE*|*NODE*}* node
    *\[*HELP-REQUEST*\]*
    *\[*VALUE-REQUEST*\]*
    *\[*AS SEARCH PATTERN*\]* ...

Additions:

[1\. ... FOR *{*TABLE*|*NODE*}* node](#!ABAP_ADDITION_1@1@)
[2\. ... HELP-REQUEST](#!ABAP_ADDITION_2@2@)
[3\. ... VALUE-REQUEST](#!ABAP_ADDITION_3@3@)
[4\. ... AS SEARCH PATTERN](#!ABAP_ADDITION_4@4@)

Effect

These additions for the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm) are only possible in the [selection include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_statements.htm) of a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). They must be used to assign a node in the logical database to the parameter. Subroutines for self-defined helps can be called and a special parameter can be defined for evaluating the search help linked with the logical database.

Hint

If logical databases are no longer created, it is no longer necessary to use these additions of the statement PARAMETERS.

Addition 1   

... FOR *{*TABLE*|*NODE*}* node

Effect

With this addition, the parameter must be assigned to a node of the structure of the logical database. If a node has type T, the addition TABLE can be used instead of NODE. For a description of the node types, see the statement [NODES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnodes.htm).

When the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") of an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is linked with the logical database is created, input fields are created only for those parameters for which an [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") for the assigned node, or a node below it in the hierarchy, is declared using NODES or [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) in the executable program. When using the function module LDB\_PROCESS, the assigned node node must be requested so that the parameter appears on the selection screen.

Addition 2   

... HELP-REQUEST

Effect

This addition specifies that the subroutine para\_hlp (para is the name of the parameter) of the [database program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database is called if the user selects the F1 field help for a screen element of the parameter on the selection screen. If the subroutine is not available, the addition is ignored.

If the parameter is defined with a reference to a data type in the ABAP Dictionary, the field help that is defined there is not displayed.

Hint

In the called subroutine, the field help display can be programmed or called using suitable function modules, such as HELP\_OBJECT\_SHOW. When input help is selected, no other [selection screen events](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are raised and there is no automatic pass by value between the selection screen and the program.

Addition 3   

... VALUE-REQUEST

Effect

This addition specifies that the subroutine para\_val (para is the name of the parameter) of the [database program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the logical database is called if the user selects the F4 input help on a screen element of the parameter on the [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The input help key is displayed for the input field of the parameter on the selection screen. If the subroutine is not available, the addition is ignored.

If the parameter is defined with a reference to a data type in the ABAP Dictionary, the input help that is defined there is not displayed.

Hint

In the called subroutine, the input help display can be programmed or called using suitable function modules such as F4IF\_INT\_TABLE\_VALUE\_REQUEST. If the input help is selected, no other selection screen events are raised and there is no automatic pass by value between the selection screen and the program. Suitable function modules must be used for this, as with general [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynp_field_help.htm). The parameter that is changed in the subroutine is transported to the selection screen.

Addition 4   

... AS SEARCH PATTERN

Effect

This addition enables a search help to be evaluated in the [database program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_program_glosry.htm "Glossary Entry"). To do this, the logical database must be assigned a search help in transaction SE36. Except for the mandatory addition FOR TABLE*|*NODE, the addition AS SEARCH PATTERN can only be combined with the addition [MODIF ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_screen.htm). In particular, a type cannot be defined with the addition TYPE.

The data type of the parameter is the internal table syldb\_sp from the [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") SYLDB. This table has three columns: hotkey (search help ID), string (search string), and trange ( [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") data type for complex search helps). The [selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") displays an outlined block with the title Selection using search help, which contains input fields for the search help ID and the search string as well as a pushbutton for complex search helps.

After the [selection screen has been processed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"), the list of values created by the search help is available in the internal table ldb\_SP in the database program. Instead of the PUT\_root subroutine, the PUT\_ldb\_SP subroutine is called. Here, ldb is the name of the logical database and root is the name of the root node. This subroutine can read the actual data using the list of values in ldb\_SP and can then call the subroutine PUT\_root, where the event [GET root](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) is raised by the statement [PUT root](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapput.htm).

Hint

See also [Logical Databases - Links with Search Helps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_search_help.htm).