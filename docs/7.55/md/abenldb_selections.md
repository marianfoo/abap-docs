  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Components](javascript:call_link\('abenldb_oview.htm'\)) → 

LDB - Selections

The selections on a [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") of a logical database are defined using the usual statements used to define selection screens:

-   [PARAMETERS](javascript:call_link\('abapparameters.htm'\)),

-   [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)),

-   [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)).

In logical database, the additions [VALUE-REQUEST](javascript:call_link\('abapparameters_ldb.htm'\)) and [HELP-REQUEST](javascript:call_link\('abapparameters_ldb.htm'\)) can also be used to define specific input helps. The selection screen is defined in a special include program, known as the [selection include](javascript:call_link\('abenselection_include_glosry.htm'\) "Glossary Entry"). The name of this selection include is DBldbSEL, where ldb stands for the name of the logical database. This include program cannot be included explicitly in the database program using an INCLUDE statement. It is included in the database program and associated programs automatically when it is generated.

Every executable ABAP program that uses a logical database can add program-specific selections to the selections of the logical database. The standard selection screen first displays the database-specific selections and then the program-specific selections.

When the selection screen of an executable program is created, only those database-specific selection criteria and parameters are displayed whose associated tables also have interface work areas declared using [NODES](javascript:call_link\('abapnodes.htm'\)) or [TABLES](javascript:call_link\('abaptables.htm'\)) in the program.

The selection screen of a logical database is also part of the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") with the dynpro number 1000 of an executable program associated with the logical database. It has a standardized layout, with the selection criteria and parameters in individual lines and in the order declared. The layout can be defined using the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)).

The ABAP runtime environment generates the selection screen with the dynpro number 1000 for every program where no other selection screen version was specified in the program attributes. To prevent certain input fields of the selection screen of a logical database from appearing on the screen, selection screen versions (with dynpro numbers less than 1000) can be defined in the selection include and then entered in the program attributes. Here, the input help key provides an overview of the selection screen versions defined in an associated logical database. Selection screen versions are defined using the statements [SELECTION-SCREEN BEGIN*|*END OF VERSION](javascript:call_link\('abapselection-screen_ldb_version.htm'\)). Within these statements, [SELECTION-SCREEN EXCLUDE](javascript:call_link\('abapselection-screen_ldb_version.htm'\)) can be used to name the fields to be suppressed on the selection screen.

If the attributes of an executable program contain the number of a selection screen version of this type, this number is included in the standard selection screen. The excluded input fields are not displayed, but the associated selections still exist and can be processed internally in the program or filled when called using the function module LDB\_PROCESS.

Hint

When a selection include is created, Logical Database Builder generates a template based on the existing structure. Here, [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) statements are predefined automatically for all database tables of the structure (nodes of type T) and just commented at first. Selection criteria for each of the primary key fields of each database table are proposed.

If a [search help](javascript:call_link\('abenldb_search_help.htm'\)) is specified for the logical database, an appropriate PARAMETERS statement [AS SEARCH PATTERN](javascript:call_link\('abapparameters_ldb.htm'\)) is predefined. If specified in the definition of the structure, SELECTION-SCREEN statements with the additions [DYNAMIC SELECTIONS](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\)) and [FIELD SELECTION](javascript:call_link\('abapselection-screen_ldb_field.htm'\)) for [dynamic selections](javascript:call_link\('abenldb_free_selections.htm'\)) and [field selections](javascript:call_link\('abenldb_field_selections.htm'\)) are generated for nodes of the type T and S.

As well as the element proposals, the selection screen can be modified as follows:

-   PARAMETERS can be used to define additional parameters. These can be used, for example, to check the flow of the program. Here, the addition [FOR TABLE*|*NODE](javascript:call_link\('abapparameters_ldb.htm'\)) of the PARAMETERS statement must be used in the selection include. When the selection screen is generated, this respects only those parameters for nodes that are also defined in the executable program using NODES or TABLES or requested by the function module LDB\_PROCESS.

-   SELECTION-SCREEN can be used to format the selection screen.

-   The addition [DYNAMIC SELECTIONS](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\)) can be used to predefine further nodes for dynamic selections. At runtime, the user can define for which components of the node selections can be entered. The dynamic entries must be handled specially in the database program.

-   The addition [FIELD SELECTION](javascript:call_link\('abapselection-screen_ldb_field.htm'\)) can be used to predefine further nodes for field selections. Using a field list in the GET statement, an executable program can control which fields of the node are to be provided by the logical database. If the function module LDB\_PROCESS is used, the FIELD\_SELECTION parameter must be passed accordingly. The corresponding user entries must be handled specially in the database program.

-   The additions [BEGIN OF VERSION dynnr](javascript:call_link\('abapselection-screen_ldb_version.htm'\)), [EXCLUDE](javascript:call_link\('abapselection-screen_ldb_version.htm'\)), and [END OF VERSION](javascript:call_link\('abapselection-screen_ldb_version.htm'\)) can be used to create various versions of the selection screen with dynpro numbers less than 1000. This hides input fields of selection criteria or parameters. In this way, an executable program can work with a suitable selection screen version.

Example

A selection include contains the lines:

SELECT-OPTIONS slifnr FOR lfa1-lifnr.
PARAMETERS pbukrs LIKE lfb1-bukrs FOR TABLE lfb1.

This associates the selection criterion slifnr with the table LFA1 and the parameter pbukrs with the table LFB1. If only lfa1 but not lfb1 is declared as an interface work area in an executable program, slifnr appears on the selection screen, but not pbukrs.

Example

See also [Example of a Selection Include](javascript:call_link\('abenldb_selections_example.htm'\)).