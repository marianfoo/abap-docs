# ABAP - Keyword Documentation / ABAP - Release-Specific Changes / Changes in Release 7.0 and its EhPs / Changes for Release 7.0

Included pages: 14


### abennews-70.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) → 

Changes for Release 7.0

The following topics have been addressed in development of the Application Server ABAP for SAP NetWeaver Release 7.0:
[Switch Framework](javascript:call_link\('abennews-70-sfw.htm'\))
[Enhancement Concept](javascript:call_link\('abennews-70-enhancement.htm'\))
[Internal Tables](javascript:call_link\('abennews-70-tabellen.htm'\))
[Character String Processing](javascript:call_link\('abennews-70-regex.htm'\))
[Shared Objects](javascript:call_link\('abennews-70-shared_objects.htm'\))
[File Interface](javascript:call_link\('abennews-70-dataset.htm'\))
[Object Services](javascript:call_link\('abennews-700-object_services.htm'\))
[Remote Function Call](javascript:call_link\('abennews-70-rfc.htm'\))
[XML Integration](javascript:call_link\('abennews-70-xml.htm'\))
[Tools](javascript:call_link\('abennews-700-tools.htm'\))
[Other Changes](javascript:call_link\('abennews-700-others.htm'\))
[Syntax Cleanup](javascript:call_link\('abennews-70-cleanup.htm'\))
[ABAP Keyword Documentation](javascript:call_link\('abennews-70-docu.htm'\))

Continue
[Switch Framework for Release 7.0](javascript:call_link\('abennews-70-sfw.htm'\))
[Enhancement Concept in Release 7.0](javascript:call_link\('abennews-70-enhancement.htm'\))
[Internal Tables in Release 7.0](javascript:call_link\('abennews-70-tabellen.htm'\))
[Character string processing for release 7.0](javascript:call_link\('abennews-70-regex.htm'\))
[Shared Objects to Release 7.0](javascript:call_link\('abennews-70-shared_objects.htm'\))
[File Interface in Release 7.0](javascript:call_link\('abennews-70-dataset.htm'\))
[Object Services in Release 7.0](javascript:call_link\('abennews-700-object_services.htm'\))
[Remote Function Call for Release 7.0](javascript:call_link\('abennews-70-rfc.htm'\))
[XML Interface in Release 7.0](javascript:call_link\('abennews-70-xml.htm'\))
[Tools in Release 7.00](javascript:call_link\('abennews-700-tools.htm'\))
[Further Changes in Release 7.0](javascript:call_link\('abennews-700-others.htm'\))
[Syntax Cleanup in Release 7.0](javascript:call_link\('abennews-70-cleanup.htm'\))
[ABAP Keyword Documentation in Release 7.0](javascript:call_link\('abennews-70-docu.htm'\))


### abennews-70-sfw.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Switch Framework for Release 7.0

[1\. Connection of dynpros to the Switch Framework](#!ABAP_MODIFICATION_1@1@)

[2\. Connection of the syntax check to the Switch Framework](#!ABAP_MODIFICATION_2@2@)

As of release 7.0, a [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") is available for the external control of the visibility of [Repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") or their components using [switches](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") in the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). The following changes have been made to dynpro and ABAP statements to enable this function:

Modification 1

Connection of dynpros to the Switch Framework

The new addition SWITCH to the statement [MODULE](javascript:call_link\('dynpmodule.htm'\)) of the dynpro flow logic can be used to make the call of a dialog module dependent on the state of a switch.

The statement [FIELD](javascript:call_link\('dynpfield.htm'\)) and the activation of functions in the GUI status are controlled by connecting switches to dynpro fields and status elements in the Screen Painter or the Menu Painter.

Modification 2

Connection of the syntax check to the Switch Framework

In every implicit or explicit compilation of an ABAP program, the
syntax check uses the switch configuration of the Switch Framework that is available when the statement is executed.

When the statement [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) is executed, the syntax check uses the switch configuration that was available at the time the current transaction was called.

As a standard setting, a syntax check performed using the statement [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)) uses the switch configuration available at the time the statement is executed. To achieve the same behavior as with the statement [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)), the addition WITH CURRENT SWITCHSTATES has been introduced.


### abennews-70-enhancement.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Enhancement Concept in Release 7.0

[1\. Source code enhancements](#!ABAP_MODIFICATION_1@1@)
[
2\. Enhancements using BAdIs](#!ABAP_MODIFICATION_2@2@)

From Release 7.0, [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") offers a new [enhancement concept](javascript:call_link\('abenenhancement_concept_glosry.htm'\) "Glossary Entry") which enables [enhancements](javascript:call_link\('abenenhancement_glosry.htm'\) "Glossary Entry") to be controlled by [switches](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry"). Enhancements to [ABAP source code](javascript:call_link\('abenabap_source_code_glosry.htm'\) "Glossary Entry") and using BAdIs are supported by the ABAP runtime environment.

Modification 1

Source Code Enhancements

For source code enhancements using [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry"), the following new statements have been introduced:

-   [ENHANCEMENT-POINT](javascript:call_link\('abapenhancement-point.htm'\))
    
-   [ENHANCEMENT-SECTION](javascript:call_link\('abapenhancement-section.htm'\))
    
-   [ENHANCEMENT](javascript:call_link\('abapenhancement.htm'\))
    

[Implicit enhancement points](javascript:call_link\('abenimplicit_enh_points.htm'\)) are also available in ABAP source code or parameter interfaces of procedures.

Modification 2

Enhancements Using BAdIs

For enhancements using [BAdIs](javascript:call_link\('abenbadi_glosry.htm'\) "Glossary Entry"), the following new statements have been introduced:

-   [GET BADI](javascript:call_link\('abapget_badi.htm'\))
    
-   [CALL BADI](javascript:call_link\('abapcall_badi.htm'\))


### abennews-70-tabellen.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Internal Tables in Release 7.0

In Release 7.0, additional functions in internal tables have been introduced as follows:

[1\. Addition CASTING after ASSIGNING](#!ABAP_MODIFICATION_1@1@)

[2\. Sort key specified dynamically in SORT](#!ABAP_MODIFICATION_2@2@)

[3\. Optimization when specifying a WHERE condition](#!ABAP_MODIFICATION_3@3@)

Modification 1

Addition CASTING After ASSIGNING

In all statements for processing internal tables in which the addition [ASSIGNING <fs>](javascript:call_link\('abapread_table_outdesc.htm'\)) can be specified for the output behavior, it is now also possible to use the addition [CASTING](javascript:call_link\('abapassign_casting.htm'\)) (familiar from the statement [ASSIGN](javascript:call_link\('abapassign.htm'\))) to cast a table row to the type of the field symbol.

Modification 2

Sort Key Specified Dynamically in SORT

In the statement [SORT itab](javascript:call_link\('abapsort_itab.htm'\)), the sort key, sort direction, and the text sorting can be specified in a new variant of the addition BY in a special internal table otab of type ABAP\_SORTORDER\_TAB.

Modification 3

Optimization when Specifying a WHERE Condition

Until now, the optimized table reads performed when specifying an initial segment of the table key (using equality queries joined using AND) in cases where a WHERE condition was specified in the statements [LOOP](javascript:call_link\('abaploop_at_itab_cond.htm'\)), [DELETE](javascript:call_link\('abapdelete_itab_lines.htm'\)), and [MODIFY](javascript:call_link\('abapmodify_itab_multiple.htm'\)) were only optimized for [sorted tables](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"). From Release 7.0, this is done for [hashed tables](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") too. In hashed tables, however, the entire table key must be specified for the optimization to take place.


### abennews-70-regex.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Character string processing for release 7.0

[1\. Search for regular expressions in character strings](#!ABAP_MODIFICATION_1@1@)
[
2\. Search for multiple found locations with FIND](#!ABAP_MODIFICATION_2@2@)
[
3\. Number of found locations in unsuccessful searches](#!ABAP_MODIFICATION_3@3@)
[
4\. Find and replace in internal tables](#!ABAP_MODIFICATION_4@4@)
[
5\. New additions for CONCATENATE](#!ABAP_MODIFICATION_5@5@)

Modification 1

Search for regular expressions in character strings

As of release 7.0, it is possible to search for [regular expressions](javascript:call_link\('abenregular_expression_glosry.htm'\) "Glossary Entry") in the statements [FIND](javascript:call_link\('abapfind.htm'\)) and [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\)). This replaces the search for patterns with the statement [SEARCH](javascript:call_link\('abapsearch-.htm'\)).

Modification 2

Search for multiple found locations with FIND

As of release 7.0, the addition ALL OCCURRENCES can be used in the statement [FIND](javascript:call_link\('abapfind.htm'\)). The previous behavior is expressed using the addition FIRST OCCURRENCE. In addition, the statements FIND and [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\)) for pattern-based searching have been widely standardized.

Modification 3

Number of found locations in unsuccessful searches

As of release 7.0, the addition REPLACEMENT COUNT of the statement [REPLACE](javascript:call_link\('abapreplace_in_pattern.htm'\)) sets the operand rcnt to 0, if no replacement has been made. This is the same as the statement [FIND](javascript:call_link\('abapfind.htm'\)), in which mcnt is also set to 0 by the addition MATCH COUNT for unsuccessful searches. Before release 7.0, rcnt retained its own previous value if no replacement was made.

Modification 4

Find and replace in internal tables

As of release 7.0, internal tables can be searched with the statement [FINDIN TABLE](javascript:call_link\('abapfind_itab.htm'\)) and modified using [REPLACE IN TABLE](javascript:call_link\('abapreplace_itab.htm'\)). This replaces the search in internal tables using the statement [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).

Modification 5

New additions for CONCATENATE

As of release 7.0, the addition LINES OF in the statement [CONCATENATE](javascript:call_link\('abapconcatenate.htm'\)) can be used to concatenate rows of an internal table.

The new addition RESPECTING BLANKS enables closing blanks to be taken into account in data objects of fixed length. This can also be used to assign text fields to strings when taking into account the closing blanks.


### abennews-70-shared_objects.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Shared Objects to Release 7.0

[1\. Data references in the Shared Objects Memory](#!ABAP_MODIFICATION_1@1@)

[2\. Waiting periods for change locks](#!ABAP_MODIFICATION_2@2@)

Modification 1

Data references in the Shared Objects Memory

Since Release 7.0, data references that point to data objects of the same [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry"), can be stored permanently in the [Shared Objects Memory](javascript:call_link\('abenshared_objects_memory_glosry.htm'\) "Glossary Entry"). An instance of a shared memory enabled class can contain data reference variables as attributes that point to data objects within a closed area instance version. An exception only occurs if the used data type is unknown to the DETACH\_COMMITmethod in the Shared Objects Memory during execution. This is the case if the types of the referenced data objects were created dynamically. Due to technical reasons, no direct reference to data elements and table types of the ABAP Dictionary is possible as well.

The opportunity to store data references in closed area instance versions makes it possible - since release 7.0 - to store not only instances of classes, but also [anonymous data objects](javascript:call_link\('abenanonymous_data_object_glosry.htm'\) "Glossary Entry") with the addition [AREA HANDLE](javascript:call_link\('abapcreate_data_area_handle.htm'\)) of the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)) as [Shared Objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry").

Modification 2

Waiting period for change locks

Since release 7.0, a waiting period can be transferred to the parameter WAIT\_TIME for the methods ATTACH\_FOR\_WRITE and ATTACH\_FOR\_UPDATE of the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry"). The same applies for MULTI\_ATTACH of CL\_SHM\_AREA.


### abennews-70-dataset.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

File Interface in Release 7.0

[1\. Handling of the byte order mark](#!ABAP_MODIFICATION_1@1@)
[
2\. Definition of the line end marker](#!ABAP_MODIFICATION_2@2@)
[
3\. Help class for the file interface](#!ABAP_MODIFICATION_3@3@)
[
4\. Trailing blanks in legacy EBCDIC files](#!ABAP_MODIFICATION_4@4@)

Modification 1

Handling of the Byte Order Mark

When a [UTF-8](javascript:call_link\('abenutf8_glosry.htm'\) "Glossary Entry") [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") is opened, the handling of the byte order mark (BOM) at the start of the file can be controlled using the new addition [SKIPPING*|*WITH BYTE-ORDER MARK](javascript:call_link\('abapopen_dataset_encoding.htm'\)).

Modification 2

Definition of the Line End Marker

When any [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") is opened, the line end marker can be defined using the new addition [WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)).

The structure of file properties used in the statements [GET DATASET](javascript:call_link\('abapget_dataset.htm'\)) and [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)) has been enhanced by the addition of the components linefeed and linefeed\_mode for the line end marker, so that these can be selected and set for an open file.

Modification 3

Help Class for the File Interface

The static methods of the new class CL\_ABAP\_FILE\_UTILITIES provide information about files on the application server.

Modification 4

Trailing Blanks in EBCDIC Files

For [text files](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") handled as [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") [EBCDIC](javascript:call_link\('abenebcdic_glosry.htm'\) "Glossary Entry") files using the addition [LEGACY TEXT MODE](javascript:call_link\('abapopen_dataset_mode.htm'\)), the following criteria have been defined:

-   As is also the case with other code pages, trailing blanks are now cut off when writing a legacy EBCDIC text file using [TRANSFER](javascript:call_link\('abaptransfer.htm'\)). Before Release 7.0, the hexadecimal EBCDIC code "40" was written to the file.
    
-   When writing to a legacy EBCDIC text file using [TRANSFER](javascript:call_link\('abaptransfer.htm'\)), it is now padded with the hexadecimal EBCDIC code "40" for blanks if the specified length is greater than that of the data object. Before Release 7.0, it was padded with the ASCII code for blanks.
    
-   If, when reading a legacy EBCDIC text file using [READ DATASET](javascript:call_link\('abapread_dataset.htm'\)), the target object must be padded with blank characters, it is now padded with the blanks of the current [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry"). Before Release 7.0, it was padded with hexadecimal "80".


### abennews-700-object_services.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Object Services in Release 7.0

[1\. Loading multiple persistent objects](#!ABAP_MODIFICATION_1@1@)
[
2\. Query service](#!ABAP_MODIFICATION_2@2@)

Modification 1

Loading Multiple Persistent Objects

From Release 7.0, the interface IF\_OS\_CA\_PERSISTENCY of the [persistence service](javascript:call_link\('abenabap_object_services_persist.htm'\)) contains the methods GET\_PERSISTENT\_BY\_OID\_TAB, GET\_PERSISTENT\_BY\_KEY\_TAB, and GET\_PERSISTENT\_BY\_QUERY. This makes it possible to retrieve more than one persistent object at once from the database and to create the appropriate instances in the ABAP program.

Modification 2

Query Service

From Release 7.0, the [object services](javascript:call_link\('abenobject_services_glosry.htm'\) "Glossary Entry") offer a [query service](javascript:call_link\('abenabap_object_services_query.htm'\)) to find and load [persistent objects](javascript:call_link\('abenpersistent_object_glosry.htm'\) "Glossary Entry") from the database.


### abennews-70-rfc.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Remote Function Call for Release 7.0

[1\. New transactional RFC](#!ABAP_MODIFICATION_1@1@)

Modification 1

New transactional RFC

A new interface has been developed for [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") and [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry"), which will exist in parallel with the old interface as of Release 7.0. The statement for calling a transactional RFC via the new interface is [CALL FUNCTION IN BACKROUND UNIT](javascript:call_link\('abapcall_function_background_unit.htm'\)).

Note

Complete shipment from [Release 7.0, EhP2](javascript:call_link\('abennews-71-rfc.htm'\)).


### abennews-70-xml.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

XML Interface in Release 7.0

[1\. Enhancements to ST](#!ABAP_MODIFICATION_1@1@)

[2\. Changes to CALL TRANSFORMATION](#!ABAP_MODIFICATION_2@2@)

Modification 1

Enhancements to ST

The following changes were made to the syntax for [simple transformations](javascript:call_link\('abensimple_transformation_glosry.htm'\) "Glossary Entry"):

-   New statements tt:type, tt:node, and tt:front for the definition of types in the ST program.
    
-   New attribute type for tt:root for the typing of data roots.
    
-   In type definitions and typings, string and xstring can now be also be entered as elementary ABAP types, and lengths can be specified for c and x.
    
-   New statement tt:extensible for controlling the extensibility of literal XML elements.
    
-   Generalization of the term "pattern" for conditional transformations.
    

See the [ST Command Overview](javascript:call_link\('abenst_statements.htm'\)).

Modification 2

Changes to CALL TRANSFORMATION

In the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)), the dynamic specification of parameters after the addition PARAMETERS has been enhanced by the option of entering the following table types:

-   ABAP\_TRANS\_OBJ\_BIND\_TAB for the specification of data references
    
-   ABAP\_TRANS\_OBJBIND\_TAB for the specification of object references.


### abennews-700-tools.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Tools in Release 7.00

[1\. ABAP Debugger](#!ABAP_MODIFICATION_1@1@)
[
2\. Memory Inspector](#!ABAP_MODIFICATION_2@2@)
[
3\. ABAP Unit](#!ABAP_MODIFICATION_3@3@)
[
4\. Logpoints](#!ABAP_MODIFICATION_4@4@)

Modification 1

ABAP Debugger

The new two-process debugger has been further developed as follows:

1.  Alignment to the functions of the previous debugger:
    Rows can be inserted and deleted in the display of internal tables.
    Watchpoints can be created.
    External programs (RFC, update function modules, BSP, ...) can be debugged.
    Integration of memory analysis and Memory Inspector.
    
2.  New tools:
    New Editor Control used for source code, which displays the content of variables as a tooltip.
    Display of differences between complex data objects.
    Display of data object graphs.
    Display of global data objects of all loaded programs.
    Structured display of the current dynpro and container controls.
    
3.  Enhancements:
    Variable fast display split into global and local data. Display of current parameter interface with local data.
    Complete dynpro stack and ABAP stack in the stack display.
    Pausing of a running process at a particular point by setting a session breakpoint in a parallel [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry").
    

Note

From Release 7.0, the default setting is the use of the two-process debugger. This setting can be changed in ABAP Editor by choosing Utilities → Settings → ABAP Editor → Debugging.

Modification 2

Memory Inspector

-   Memory Inspector can now be called in every transaction by choosing System → Utilities → Memory Analysis → Compare Memory Snapshots.
    
-   Memory snapshots can now be created in every transaction by choosing System → Utilities → Memory Analysis → Create Memory Snapshot.
    

Modification 3

ABAP Unit

1.  The [pseudo comments](javascript:call_link\('abenpseudo_comment_glosry.htm'\) "Glossary Entry")
    "#AU Risk\_Level ...
    "#AU Duration ...
    can be used to define test properties when creating [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") using the statement [CLASS ... FOR TESTING](javascript:call_link\('abapclass_options.htm'\)).
    
2.  To enable the reuse of extensive test preparations, global [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") can be defined in [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry"). Global test classes should always be abstract, can only be used in local test classes, and, like these, are not generated in production systems.
    

Modification 4

Logpoints

-   The new [LOG-POINT](javascript:call_link\('abaplog-point.htm'\)) statement enables unconditional log entries to the log also used by [ASSERT](javascript:call_link\('abapassert.htm'\)). Logpoints are [activatable checkpoints](javascript:call_link\('abenactivatable_checkpoint_glosry.htm'\) "Glossary Entry"), whose activation must be controlled using [checkpoint groups](javascript:call_link\('abencheckpoint_group_glosry.htm'\) "Glossary Entry") or [activation variants](javascript:call_link\('abenactivation_variant_glosry.htm'\) "Glossary Entry"). Logpoints replace the incorrect usage of ASSERT for logging-only purposes.


### abennews-700-others.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Further Changes in Release 7.0

[1\. Class for system statuses](#!ABAP_MODIFICATION_1@1@)

[2\. Number of ABAP sessions per user session](#!ABAP_MODIFICATION_2@2@)

[3\. Storing of interface constants](#!ABAP_MODIFICATION_3@3@)

[4\. Exception handling for data clusters](#!ABAP_MODIFICATION_4@4@)

[5\. Authorization check for users](#!ABAP_MODIFICATION_5@5@)

[6\. Strings on selection screens](#!ABAP_MODIFICATION_6@6@)

[7\. Format of lists when sending](#!ABAP_MODIFICATION_7@7@)

Modification 1

Class for system statuses

The static methods of the class CL\_ABAP\_SYST return important system statuses and replace the evaluation of the corresponding [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") if it is necessary to ensure that a system field was not incorrectly overwritten in a program.

Modification 2

Number of ABAP Sessions per User Session

From Release 7.0, up to 16 [ABAP sessions](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") can be opened per user session, compared to the previous maximum of
6\. The actual number is controlled by the system parameter rdisp/max\_alt\_modes. The default value for this parameter is 6 as before.

To enable more than single-digit numbers in the [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") sy-modno, its data type has been changed (incompatibly ) from c of length 1 to i.

Modification 3

Storage of Interface Constants

From Release 7.0, an interface constant is created exactly once in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and GET
REFERENCE returns the same reference regardless of the name. Before Release 7.0, a new interface constant was created for each implementation and different formulations like i1=>const, c1=>i1~const, or c2=>i1~const produced different references for a constant const with GET REFERENCE.

Modification 4

Exception Handling for Data Clusters

In IMPORT, the exception IMPORT\_FORMAT\_ERROR has been made handleable by assigning it to the new class CX\_SY\_IMPORT\_FORMAT\_ERROR. The exception CONNE\_IMPORT\_CONVERSION\_ERROR has been made handleable by assigning it to the existing class CX\_SY\_CONVERSION\_CODEPAGE (change was also transported back to Release 6.40)

The addition [IGNORING CONVERSION ERRORS](javascript:call_link\('abapimport_conversion.htm'\)) now also suppresses the exception raised by the fact that the number of bytes of an imported character-like component increases when it is converted to another code page, and therefore no longer fits into the target object. Up to now, only superfluous blanks were cut off without raising an exception (change was also transported back to Release 6.40).

Modification 5

Authorization Check for Users

From Release 7.0, the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) now has the addition FOR USER, which can be used to check the authorizations of any user.

Modification 6

Strings on Selection Screens

In the statement [PARAMETERS](javascript:call_link\('abapparameters.htm'\)), it is now also possible to specify the data type string after the addition [TYPE](javascript:call_link\('abapparameters_type.htm'\)).

Modification 7

Format of Lists when Sending

The internal format into which an ABAP list is packed when the send function is called, has been changed. The previous format can still be read. From Release 7.0, to send lists to systems with older releases, the new format must be converted to the previous format using the function module LIST\_CONVERT\_TO\_OLD\_FORMAT.


### abennews-70-cleanup.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Syntax Cleanup in Release 7.0

For Release 7.0, the ABAP syntax has been cleaned up. Errors in language constructs that previously produced only syntax warnings, now cause syntax errors. The profile parameter abap/warn2error\_release can be used to control whether the new syntax errors continue to be reported as syntax warnings.

The following tables show the situations that produce syntax errors from Release 7.0. An "X" in the final column of the table indicates that the syntax in question already produced a syntax error in classes before Release 7.0.

Error in Language Construct

Program Layout

Statement cannot be reached.

X

Missing forward declaration of a class using [CLASS - DEFERRED](javascript:call_link\('abapclass_deferred.htm'\)).

\-

Declarations

Program-internal [name](javascript:call_link\('abennaming_conventions.htm'\)) with more than 30 characters.

X

Special characters in a program-internal [name](javascript:call_link\('abennaming_conventions.htm'\)) in obsolete ABAP (non-Unicode).

X

Single digit as the name of a data object.

X

Incorrect [namespace prefix](javascript:call_link\('abennaming_conventions.htm'\)).

X

Operational statement within the definition of a [structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") with BEGIN OF ... END OF.

X

Reference to a data type of the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") in a public [parameter interface](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry")

X

Reference to a data type of the [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") in the declaration of a public attribute of a global class

\-

Incompatible or non-convertible value specified after DEFAULT for a [formal parameter](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry").

\-

An interface parameter of a function module, which has been defined both as input and output parameter, was declared with different or generic types.

\-

A type of a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") has the same name as an existing type in ABAP Dictionary.

\-

A constant in a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") has the same name as an existing [flat structure](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry") or table in ABAP Dictionary.

\-

A [macro](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") in a [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") does not have the name of the type group as a prefix.

A reserved component name such as the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line is used in a structure in ABAP Dictionary.

X

Internal table with the predefined name [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)).

\-

ABAP Objects

Unknown global class or interface after [GLOBAL FRIENDS](javascript:call_link\('abapclass_options.htm'\)).

\-

IMPORTING, CHANGING, or RECEIVING specified in dynamic [CREATE OBJECT](javascript:call_link\('abapcreate_object_explicit.htm'\)).

\-

Missing call of the [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry") in the instance constructor of a [subclass](javascript:call_link\('abensubclass_glosry.htm'\) "Glossary Entry").

\-

[Instance component](javascript:call_link\('abeninstance_component_glosry.htm'\) "Glossary Entry") accessed before the call of the [instance constructor](javascript:call_link\('abeninstance_constructor_glosry.htm'\) "Glossary Entry") of the [superclass](javascript:call_link\('abensuperclass_glosry.htm'\) "Glossary Entry") in the instance constructor of a [subclass](javascript:call_link\('abensubclass_glosry.htm'\) "Glossary Entry").

\-

Short form [static\_meth( a )](javascript:call_link\('abapcall_method_static_short.htm'\)) with a non-unique assignment to a formal parameter.

\-

[Fixture](javascript:call_link\('abenfixture_glosry.htm'\) "Glossary Entry") method in [test class](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") is not private.

\-

Selector \->> used instead of the [instance component selector](javascript:call_link\('abeninstance_comp_selector_glosry.htm'\) "Glossary Entry") \-> when calling interface methods.

\-

Operators and Additions

Invalid one-character operator in a [comparison expression](javascript:call_link\('abencomparison_expression_glosry.htm'\) "Glossary Entry"), which has temporarily been interpreted as an abbreviation, for example, as E for EQ.

\-

AND or OR at the end of a [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") not followed by a logical expression.

\-

More than one LENGTH addition after [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)).

\-

Addition SORTED BY specified after [COLLECT](javascript:call_link\('abapcollect.htm'\)).

X

Addition LANGUAGE specified after [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for OLE.

X

Additions AND SKIP FIRST SCREEN and USING both specified after [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)).

X

Addition OBJECT missing after [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

\-

More than ten FIELD additions after [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)).

\-

Operand Positions

Operand cannot be converted in assignment.

\-

Operand that cannot be converted to a number at a numeric operand position (for example, after [DECIMALS](javascript:call_link\('abapassign_casting.htm'\)) for ASSIGN).

\-

Length less than or equal to zero in the [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") for fields of fixed length.

X

Empty [offset/lengths](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry") specified.

X

Superfluous trailing blanks in [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry").

X

Line-spanning [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry").

X

Line-spanning element of a bulleted list.

X

Invalid use of a [text symbol](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") as the target of a call.

\-

Internal table does not have the structure of a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") in a [comparison expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") after [IN](javascript:call_link\('abenlogexp_select_option.htm'\)).

X

sy-subrc assigned to a CHANGING, EXPORTING, or RETURNING parameter.

X

Data object passed to a formal parameter typed using STRUCTURE in a program of ABAP language version [Standard ABAP (Unicode)](javascript:call_link\('abenunicode_program_glosry.htm'\) "Glossary Entry"), where the [fragment view](javascript:call_link\('abenunicode_fragment_view_glosry.htm'\) "Glossary Entry") does not match completely.

\-

Data object specified whose name contains an address specification such as an [instance component selector](javascript:call_link\('abeninstance_comp_selector_glosry.htm'\) "Glossary Entry") or an [offset/length specification](javascript:call_link\('abenoffset_length_specific_glosry.htm'\) "Glossary Entry"), without an explicit assignment to a parameter when using [EXPORT](javascript:call_link\('abapexport_data_cluster_param.htm'\)), [IMPORT](javascript:call_link\('abapimport_parameterlist.htm'\)), or [CALL DIALOG](javascript:call_link\('abapcall_dialog.htm'\)).

X

Internal Tables

[Table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") defined for a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry") without specifying UNIQUE before [KEY](javascript:call_link\('abaptypes_keydef.htm'\)).

\-

Non-[index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry") specified after [SEARCH](javascript:call_link\('abapsearch_itab.htm'\)).

X

Incompatible work area for control level processing using internal tables with [AT](javascript:call_link\('abapat_itab.htm'\)) and [SUM](javascript:call_link\('abapsum.htm'\)).

X

Component of a structured field symbol specified as a sort criterion after [SORT](javascript:call_link\('abapsort_itab.htm'\)).

Database Accesses

Columns of type STRING or RAWSTRING in [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)), [grouping](javascript:call_link\('abapgroupby_clause.htm'\)), [sort keys](javascript:call_link\('abaporderby_clause.htm'\)) of [SELECT](javascript:call_link\('abapselect.htm'\)).

\-

Projection view accessed in connection with a correlated [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry").

Too many [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") in a SELECT statement.

\-

Work area or rows of an internal table are shorter than the structure of the database table when specifying the rows in [DELETE dbtab](javascript:call_link\('abapdelete_source.htm'\)).

\-

[Indicator variable](javascript:call_link\('abapexec_host.htm'\)) in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry"), which is not of the external type INT2.

\-

List Statements

Dynamic position specification in [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [ULINE](javascript:call_link\('abapuline.htm'\)) without AT.

X

Negative length specification len after [WRITE AT](javascript:call_link\('abapwrite-.htm'\)).

\-

Write-protected data object specified after [HIDE](javascript:call_link\('abaphide.htm'\)).

X

Note

Programs that so far have used the language constructions stated above must now be considered as incorrect. If the respective positions in the program have been executed, runtime errors or undefined states occurred. The current syntax cleanup is intended to avoid error situations like the ones described here, when they are known statically in advance.


### abennews-70-docu.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes for Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

ABAP Keyword Documentation in Release 7.0

In Release 7.0, the ABAP keyword documentation has been expanded as follows:

[1\. Full text search](#!ABAP_MODIFICATION_1@1@)

[2\. Subject search](#!ABAP_MODIFICATION_2@2@)

[3\. Diagrams](#!ABAP_MODIFICATION_3@3@)

[4\. Language](#!ABAP_MODIFICATION_4@4@)

[5\. List of ABAP words](#!ABAP_MODIFICATION_5@5@)

[6\. Terminology changes for narrowing and widening casts](#!ABAP_MODIFICATION_6@6@)

[7\. Adjustment of font size](#!ABAP_MODIFICATION_7@7@)

Modification 1

Full Text Search

Considerable improvements have been made to the performance of the full text search in the ABAP keyword documentation. The occurrences found by the full text search are now marked in the display. As before, the full text search can be called from the display window of the documentation. It is also available on the initial screens for the documentation (ABAP Editor, transaction ABAPHELP) as an alternative to the index search.

Modification 2

Subject Search

An alphabetical [subject directory](javascript:call_link\('abenabap_subjects.htm'\)) has been added to the ABAP keyword documentation. The index search now evaluates this directory in addition to the [ABAP index](javascript:call_link\('abenabap_index.htm'\)) and [ABAP glossary](javascript:call_link\('abenabap_glossary.htm'\)).

Modification 3

Diagrams

Using access to the MIME repository, diagrams can now be displayed in the ABAP keyword documentation.

Example: [Sessions and Memory Areas](javascript:call_link\('abenmemory_organization.htm'\))

Modification 4

Language

It is now possible to select the language in which the documentation is displayed on the initial screen of the transaction ABAPHELP. The user can choose between the logon language, English, and German. The logon language is the standard setting. When the ABAP keyword documentation is called from ABAP Editor, the logon language is always used.

Modification 5

List of ABAP Words

The document [ABAP words](javascript:call_link\('abenabap_words.htm'\)) contains a list of all names reserved in ABAP, except for those that consist of special characters. From this list, the user can navigate directly to the occurrences.

Modification 6

Terminology Change for Narrowing and Widening Casts

The use of the terms [narrowing cast](javascript:call_link\('abennarrowing_cast_glosry.htm'\) "Glossary Entry") and [widening cast](javascript:call_link\('abenwidening_cast_glosry.htm'\) "Glossary Entry"), which refers to the view that a reference variable offers to an object, has been modified to reflect more general usage, which refers to the value set covered by a variable. Now the unambiguous terms [up cast](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") and [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry") are now used almost everywhere.

Modification 7

Adjustment of Font Size

If the font size is changed when adjusting the local layout in the SAP GUI, this also applies to the display of the ABAP keyword documentation. Previously, only changes in color affected the ABAP keyword documentation. Within a user session, the GUI font size dependency can be deactivated by setting the standard font size.
