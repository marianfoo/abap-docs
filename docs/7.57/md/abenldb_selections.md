  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb.htm) →  [LDB - Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LDB - Selections, ABENLDB_SELECTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

LDB - Selections

The selections on a [standard selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") of a logical database are defined using the usual statements used to define selection screens:

-   [PARAMETERS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters.htm),
-   [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options.htm),
-   [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm).

In logical database, the additions [VALUE-REQUEST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_ldb.htm) and [HELP-REQUEST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_ldb.htm) can also be used to define specific input helps. The selection screen is defined in a special include program, also referred to as the [selection include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_include_glosry.htm "Glossary Entry"). The name of this selection include is DBldbSEL, where ldb is the name of the logical database. This include program must not be included explicitly in the database program using an INCLUDE statement. It is included in the database program and linked programs automatically when it is generated.

Every executable ABAP program that uses a logical database can add program-specific selections to the selections of the logical database. The standard selection screen first displays the database-specific selections and then the program-specific selections.

When the selection screen of an executable program is created, only those database-specific selection criteria and parameters are displayed for whose associated tables interface work areas are also declared using [NODES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnodes.htm) or [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) in the program.

The selection screen of a logical database is also part of the [standard selection screen](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstandard_selscreen_glosry.htm "Glossary Entry") with the dynpro number 1000 of an executable program linked with the logical database. It has a standardized layout, with the selection criteria and parameters in individual lines and in the order in which they were declared. The layout can be edited using the statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm).

The ABAP runtime framework generates the selection screen with the dynpro number 1000 for every program where no other selection screen version was specified in the program properties. To prevent certain input fields of the selection screen of a logical database from appearing on the selection screen, selection screen versions (with dynpro numbers less than 1000) can be defined in the selection include and then entered in the program properties. Here, the input help key provides an overview of the selection screen versions defined in a linked logical database. Selection screen versions are defined using the statements [SELECTION-SCREEN BEGIN*|*END OF VERSION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_version.htm). Within these statements, [SELECTION-SCREEN EXCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_version.htm) can be used to name the fields to be suppressed on the selection screen.

If the properties of an executable program contain the number of a selection screen version of this type, this number is included in the standard selection screen. The excluded input fields are not displayed, but the associated selections still exist and can be processed internally in the program or filled when called using the function module LDB\_PROCESS.

Hint

When a selection include is created, the Logical Database Builder generates a template based on the existing structure. Here, [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect-options.htm) statements are predefined automatically for all database tables of the structure (nodes of type T) that are initially commented. Selection criteria for each of the primary key fields of each database table are proposed.

If a [search help](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_search_help.htm) is specified for the logical database, an appropriate PARAMETERS statement [AS SEARCH PATTERN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_ldb.htm) is predefined. If specified in the definition of the structure, SELECTION-SCREEN statements with the additions [DYNAMIC SELECTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_dynamic.htm) and [FIELD SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_field.htm) for [dynamic selections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_free_selections.htm) and [field selections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_field_selections.htm) are generated for nodes of the type T and S.

In addition to the proposed elements, the selection screen can be enhanced as follows:

-   PARAMETERS can be used to define additional parameters. These can be used, for example, to control the program flow. Here, the addition [FOR TABLE*|*NODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapparameters_ldb.htm) of the PARAMETERS statement must be used in the selection include. When the selection screen is generated, this respects only those parameters for nodes that are also defined in the executable program using NODES or TABLES or requested by the function module LDB\_PROCESS.
-   SELECTION-SCREEN can be used to format the selection screen.
    -   The addition [DYNAMIC SELECTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_dynamic.htm) can be used to predefine further nodes for dynamic selections. At runtime, the user can determine for which components of the node selections can be entered. The dynamic entries must be handled specially in the database program.
    -   The addition [FIELD SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_field.htm) can be used to predefine further nodes for field selections. Using a field list in the GET statement, an executable program can control which fields of the node are to be provided by the logical database. If the function module LDB\_PROCESS is used, the FIELD\_SELECTION parameter must be passed accordingly. The corresponding user entries must be handled specially in the database program.
    -   The additions [BEGIN OF VERSION dynnr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_version.htm), [EXCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_version.htm), and [END OF VERSION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_version.htm) can be used to create different versions of the selection screen with dynpro numbers less than 1000. This hides input fields of selection criteria or parameters. In this way, an executable program can work with a suitable selection screen version.

Example

A selection include contains the lines:

SELECT-OPTIONS slifnr FOR lfa1-lifnr.
PARAMETERS pbukrs LIKE lfb1-bukrs FOR TABLE lfb1.

This links the selection criterion slifnr with the table LFA1 and the parameter pbukrs with the table LFB1. If only lfa1 but not lfb1 is declared as an interface work area in an executable program, slifnr appears on the selection screen, but not pbukrs.

Example

See also [Example of a Selection Include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_selections_example.htm).