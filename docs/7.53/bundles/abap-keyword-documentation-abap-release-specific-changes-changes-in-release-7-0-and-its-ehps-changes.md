# ABAP Keyword Documentation / ABAP - Release-Specific Changes / Changes in Release 7.0 and its EhPs / Changes in Release 7.0

Included pages: 14


### abennews-70.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) → 

Changes in Release 7.0

The following topics were revised in development of Application Server ABAP 7.0:
[Switch Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-sfw.htm)
[Enhancement Concept](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-enhancement.htm)
[Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-tabellen.htm)
[Character String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-regex.htm)
[Shared Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-shared_objects.htm)
[File Interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-dataset.htm)
[Object Services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-700-object_services.htm)
[Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-rfc.htm)
[XML Binding](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-xml.htm)
[Tools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-700-tools.htm)
[Further Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-700-others.htm)
[Syntax Cleanup](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-cleanup.htm)
[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-docu.htm)

Continue
[Switch Framework in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-sfw.htm)
[Enhancement Concept in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-enhancement.htm)
[Internal Tables in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-tabellen.htm)
[Character String Processing in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-regex.htm)
[Shared Objects in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-shared_objects.htm)
[File Interface in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-dataset.htm)
[Object Services in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-700-object_services.htm)
[Remote Function Call for Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-rfc.htm)
[XML Binding in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-xml.htm)
[Tools in Release 7.00](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-700-tools.htm)
[Further Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-700-others.htm)
[Syntax Cleanup in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-cleanup.htm)
[ABAP Keyword Documentation in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70-docu.htm)


### abennews-70-sfw.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Switch Framework in Release 7.0

[1\. Binding of dynpros to Switch Framework](#!ABAP_MODIFICATION_1@1@)

[2\. Binding of the syntax check to Switch Framework](#!ABAP_MODIFICATION_2@2@)

From Release 7.0, [Switch Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenswitch_framework_glosry.htm "Glossary Entry") is available for the external control of the visibility of [repository objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_object_glosry.htm "Glossary Entry") or their components using [switches](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenswitch_german_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). The following changes have been made to dynpro and ABAP statements to enable this function:

Modification 1

Binding of Dynpros to Switch Framework

The new addition SWITCH of the statement [MODULE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpmodule.htm) in the dynpro flow logic can be used to make the call of a dialog module dependent on the state of a switch.

The statement [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm) and the activation of functions in the GUI status are controlled by binding switches to dynpro fields and status elements in Screen Painter or Menu Painter.

Modification 2

Binding the Syntax Check to Switch Framework

In every implicit or explicit compilation of an ABAP program, the
syntax check uses the switch configuration of Switch Framework that is provided when the statement is executed.

When the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subroutine_pool.htm) is executed, the syntax check uses the switch configuration that was available at the time the current transaction was called.

As a standard setting, a syntax check performed using the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsyntax-check_for_itab.htm) uses the switch configuration available at the time the statement is executed. To achieve the same behavior as with the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subroutine_pool.htm), the addition WITH CURRENT SWITCHSTATES has been introduced.


### abennews-70-enhancement.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Enhancement Concept in Release 7.0

[1\. Source code enhancements](#!ABAP_MODIFICATION_1@1@)
[
2\. Enhancements using BAdIs](#!ABAP_MODIFICATION_2@2@)

From Release 7.0, [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry") offers a new [enhancement concept](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_concept_glosry.htm "Glossary Entry") which enables [enhancements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenhancement_glosry.htm "Glossary Entry") to be controlled by [switches](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenswitch_german_glosry.htm "Glossary Entry"). Enhancements to [ABAP source code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_source_code_glosry.htm "Glossary Entry") and using BAdIs are supported by the ABAP runtime environment.

Modification 1

Source Code Enhancements

For source code enhancements using [source code plug-ins](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensource_code_plugin_glosry.htm "Glossary Entry"), the following new statements have been introduced:

-   [ENHANCEMENT-POINT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-point.htm)
    
-   [ENHANCEMENT-SECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement-section.htm)
    
-   [ENHANCEMENT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapenhancement.htm)
    

[Implicit enhancement points](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenimplicit_enh_points.htm) are also available in ABAP source code or parameter interfaces of procedures.

Modification 2

Enhancements Using BAdIs

For enhancements using [BAdIs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbadi_glosry.htm "Glossary Entry"), the following new statements have been introduced:

-   [GET BADI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_badi.htm)
    
-   [CALL BADI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_badi.htm)


### abennews-70-tabellen.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Internal Tables in Release 7.0

In Release 7.0, additional functions in internal tables have been introduced as follows:

[1\. Addition CASTING after ASSIGNING](#!ABAP_MODIFICATION_1@1@)

[2\. Sort key specified dynamically in SORT](#!ABAP_MODIFICATION_2@2@)

[3\. Optimization when specifying a WHERE condition](#!ABAP_MODIFICATION_3@3@)

Modification 1

Addition CASTING After ASSIGNING

In all statements for processing internal tables in which the addition [ASSIGNING <fs>](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_table_outdesc.htm) can be specified for the output behavior, it is now also possible to use the addition [CASTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) (familiar from the statement [ASSIGN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign.htm)) to cast a table row to the type of the field symbol.

Modification 2

Sort Key Specified Dynamically in SORT

In the statement [SORT itab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm), the sort key, sort direction, and the text sorting can be specified in a new variant of the addition BY in a special internal table otab of type ABAP\_SORTORDER\_TAB.

Modification 3

Optimization when Specifying a WHERE Condition

Until now, the optimized table reads performed when specifying an initial segment of the table key (using equality queries joined using AND) in cases where a WHERE condition was specified in the statements [LOOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_itab_cond.htm), [DELETE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_itab_lines.htm), and [MODIFY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_itab_multiple.htm) were only optimized for [sorted tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensorted_table_glosry.htm "Glossary Entry"). From Release 7.0, this is done for [hashed tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry") too. In hashed tables, however, the entire table key must be specified for the optimization to take place.


### abennews-70-regex.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Character String Processing in Release 7.0

[1\. Search for regular expressions in character strings](#!ABAP_MODIFICATION_1@1@)
[
2\. Search for multiple occurrences using FIND](#!ABAP_MODIFICATION_2@2@)
[
3\. Number of occurrences in unsuccessful searches](#!ABAP_MODIFICATION_3@3@)
[
4\. Find and replace in internal tables](#!ABAP_MODIFICATION_4@4@)
[
5\. New additions in CONCATENATE](#!ABAP_MODIFICATION_5@5@)

Modification 1

Search for Regular Expressions in Character Strings

From Release 7.0, it is possible to search for [regular expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenregular_expression_glosry.htm "Glossary Entry") in the statements [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm). This replaces the search for patterns using the statement [SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch-.htm).

Modification 2

Search for Multiple Occurrences using FIND

From Release 7.0, the addition ALL OCCURRENCES can be used in the statement [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm). The previous behavior is expressed using the addition FIRST OCCURRENCE. In addition, the statements FIND and [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) for pattern-based searches have been mostly standardized.

Modification 3

Number of Occurrences in Unsuccessful Searches

From Release 7.0, the addition REPLACEMENT COUNT of the statement [REPLACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_in_pattern.htm) sets the operand rcnt to 0 if no replacement has been made. This is the same as the statement [FIND](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind.htm), in which mcnt is also set to 0 by the addition MATCH COUNT for unsuccessful searches. Before Release 7.0, rcnt retained its own previous value if no replacement was made.

Modification 4

Find and Replace in Internal Tables

From Release 7.0, internal tables can be searched using the statement [FIND IN TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfind_itab.htm) and modified using [REPLACE IN TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreplace_itab.htm). This replaces the search in internal tables using the statement [SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_itab.htm).

Modification 5

New Additions in CONCATENATE

From Release 7.0, the addition LINES OF in the statement [CONCATENATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconcatenate.htm) can be used to concatenate rows of an internal table.

The new addition RESPECTING BLANKS enables trailing blanks to be respected data objects of fixed length. This can also be used to assign text fields to strings when respecting the trailing blanks.


### abennews-70-shared_objects.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Shared Objects in Release 7.0

[1\. Data references in the shared objects memory](#!ABAP_MODIFICATION_1@1@)

[2\. Waiting time for change locks](#!ABAP_MODIFICATION_2@2@)

Modification 1

Data References in the Shared Objects Memory

From Release 7.0, data references that point to data objects of the same [area instance version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") can be stored permanently in the [shared objects memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_objects_memory_glosry.htm "Glossary Entry"). An instance of a shared memory-enabled class can contain data reference variables as attributes that point to data objects within a closed area instance version. An exception is raised only if the used data type is unknown to the method DETACH\_COMMIT in the shared objects memory when the method is executed. This is the case if the types of the referenced data objects were created dynamically. Due to technical reasons, no direct reference to data elements and table types in ABAP Dictionary is possible either.

The opportunity to store data references in closed area instance versions makes it possible (from Release 7.0) to store not only instances of classes, but also [anonymous data objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenanonymous_data_object_glosry.htm "Glossary Entry") using the addition [AREA HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_area_handle.htm) of the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) as [shared objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_objects_glosry.htm "Glossary Entry").

Modification 2

Waiting Time for Change Locks

From Release 7.0, a waiting period can be passed to the parameter WAIT\_TIME for the methods ATTACH\_FOR\_WRITE and ATTACH\_FOR\_UPDATE of the [area class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_class_glosry.htm "Glossary Entry") and for MULTI\_ATTACH in CL\_SHM\_AREA.


### abennews-70-dataset.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

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

When a [UTF-8](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutf8_glosry.htm "Glossary Entry") [text file](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_file_glosry.htm "Glossary Entry") is opened, the handling of the byte order mark (BOM) at the start of the file can be controlled using the new addition [SKIPPING*|*WITH BYTE-ORDER MARK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_dataset_encoding.htm).

Modification 2

Definition of the Line End Marker

When any [text file](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_file_glosry.htm "Glossary Entry") is opened, the line end marker can be defined using the new addition [WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_dataset_linefeed.htm).

The structure of file properties used in the statements [GET DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_dataset.htm) and [SET DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_dataset.htm) has been enhanced by the addition of the components linefeed and linefeed\_mode for the line end marker, so that these can be selected and set for an open file.

Modification 3

Help Class for the File Interface

The static methods of the new class CL\_ABAP\_FILE\_UTILITIES provide information about files on the [host computer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS Instance.

Modification 4

Trailing Blanks in EBCDIC Files

For [text files](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_file_glosry.htm "Glossary Entry") handled as [legacy](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlegacy_file_glosry.htm "Glossary Entry") [EBCDIC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenebcdic_glosry.htm "Glossary Entry") files using the addition [LEGACY TEXT MODE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_dataset_mode.htm), the following criteria have been defined:

-   As is also the case with other code pages, trailing blanks are now cut off when writing a legacy EBCDIC text file using [TRANSFER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptransfer.htm). Before Release 7.0, the hexadecimal EBCDIC code "40" was written to the file.
    
-   When writing to a legacy EBCDIC text file using [TRANSFER](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptransfer.htm), it is now padded with the hexadecimal EBCDIC code "40" for blanks if the specified length is greater than that of the data object. Before Release 7.0, it was padded with the ASCII code for blanks.
    
-   If, when reading a legacy EBCDIC text file using [READ DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_dataset.htm), the target object must be padded with blank characters, it is now padded with the blanks of the current [system code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_codepage_glosry.htm "Glossary Entry"). Before Release 7.0, it was padded with hexadecimal "80".


### abennews-700-object_services.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Object Services in Release 7.0

[1\. Loading multiple persistent objects](#!ABAP_MODIFICATION_1@1@)
[
2\. Query service](#!ABAP_MODIFICATION_2@2@)

Modification 1

Loading Multiple Persistent Objects

From Release 7.0, the interface IF\_OS\_CA\_PERSISTENCY of the [persistence service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_persist.htm) contains the methods GET\_PERSISTENT\_BY\_OID\_TAB, GET\_PERSISTENT\_BY\_KEY\_TAB, and GET\_PERSISTENT\_BY\_QUERY. This makes it possible to retrieve more than one persistent object at once from the database and to create the appropriate instances in the ABAP program.

Modification 2

Query Service

From Release 7.0, the [object services](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobject_services_glosry.htm "Glossary Entry") offer a [query service](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_object_services_query.htm) to find and load [persistent objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpersistent_object_glosry.htm "Glossary Entry") from the database.


### abennews-70-rfc.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Remote Function Call for Release 7.0

[1\. New transactional RFC](#!ABAP_MODIFICATION_1@1@)

Modification 1

New Transactional RFC

A new interface has been developed for [tRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrfc_2_glosry.htm "Glossary Entry") and [qRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenqrfc_glosry.htm "Glossary Entry"), which will exist in parallel with the old interface from Release 7.0. The statement for calling a transactional RFC from the new interface is [CALL FUNCTION IN BACKROUND UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_background_unit.htm).

Note

Complete shipment from [Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-71-rfc.htm) only.


### abennews-70-xml.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

XML Binding in Release 7.0

[1\. Enhancements to ST](#!ABAP_MODIFICATION_1@1@)

[2\. Changes to CALL TRANSFORMATION](#!ABAP_MODIFICATION_2@2@)

Modification 1

Enhancements to ST

The following changes have been made to the syntax for [Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensimple_transformation_glosry.htm "Glossary Entry"):

-   New statements tt:type, tt:node, and tt:front for the definition of types in the ST program.
    
-   New attribute type for tt:root for the typing of data roots.
    
-   In type definitions and typings, string and xstring can now be also be entered as elementary ABAP types, and lengths can be specified for c and x.
    
-   New statement tt:extensible for controlling the extensibility of literal XML elements.
    
-   Generalization of the term "pattern" for conditional transformations.
    

See the [ST Command Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_statements.htm).

Modification 2

Changes to CALL TRANSFORMATION

In the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm), the dynamic specification of parameters after the addition PARAMETERS has been enhanced by the option of entering the following table types:

-   ABAP\_TRANS\_OBJ\_BIND\_TAB for the specification of data references
    
-   ABAP\_TRANS\_OBJBIND\_TAB for the specification of object references.


### abennews-700-tools.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

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
    Structured display of the current screens and container controls.
    
3.  Enhancements:
    Variable fast display split into global and local data. Display of current parameter interface with local data.
    Complete screen and ABAP stack in the stack display.
    Pausing of a running process at a particular point by setting a session breakpoint in a parallel [ABAP session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_session_glosry.htm "Glossary Entry").
    

Note

From Release 7.0, the default setting is the use of the two-process debugger. This setting can be changed in ABAP Editor by choosing Utilities → Settings → ABAP Editor → Debugging.

Modification 2

Memory Inspector

-   Memory Inspector can now be called in every transaction by choosing System → Utilities → Memory Analysis → Compare Memory Snapshots.
    
-   Memory snapshots can now be created in every transaction by choosing System → Utilities → Memory Analysis → Create Memory Snapshot.
    

Modification 3

ABAP Unit

1.  The [pseudo comments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_comment_glosry.htm "Glossary Entry")
    "#AU Risk\_Level ...
    "#AU Duration ...
    can be used to define test properties when creating [test classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_class_glosry.htm "Glossary Entry") using the statement [CLASS ... FOR TESTING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_options.htm).
    
2.  To enable the reuse of extensive test preparations, global [test classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_class_glosry.htm "Glossary Entry") can be defined in [Class Builder](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_builder_glosry.htm "Glossary Entry"). Global test classes should always be abstract, can only be used in local test classes, and, like these, are not generated in production systems.
    

Modification 4

Logpoints

-   The new [LOG-POINT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaplog-point.htm) statement enables unconditional log entries to the log also used by [ASSERT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassert.htm). Logpoints are [activatable checkpoints](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenactivatable_checkpoint_glosry.htm "Glossary Entry"), whose activation must be controlled using [checkpoint groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheckpoint_group_glosry.htm "Glossary Entry") or [activation variants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenactivation_variant_glosry.htm "Glossary Entry"). Logpoints replace the incorrect usage of ASSERT for logging-only purposes.


### abennews-700-others.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

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

The static methods of the class CL\_ABAP\_SYST return important system statuses and replace the evaluation of the corresponding [system fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm "Glossary Entry") if it is necessary to ensure that a system field was not incorrectly overwritten in a program.

Modification 2

Number of ABAP Sessions per User Session

From Release 7.0, up to 16 [ABAP sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_session_glosry.htm "Glossary Entry") can be opened per user session, compared to the previous maximum of
6\. The actual number is controlled by the system parameter rdisp/max\_alt\_modes. The default value for this parameter is 6 as before.

To enable more than single-digit numbers in the [system field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-modno, its data type has been changed (incompatibly ) from c of length 1 to i.

Modification 3

Storage of Interface Constants

From Release 7.0, an interface constant is created exactly once in the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") and GET
REFERENCE returns the same reference regardless of the name. Before Release 7.0, a new interface constant was created for each implementation and different formulations like i1=>const, c1=>i1~const, or c2=>i1~const produced different references for a constant const with GET REFERENCE.

Modification 4

Exception Handling for Data Clusters

In IMPORT, the exception IMPORT\_FORMAT\_ERROR has been made handleable by assigning it to the new class CX\_SY\_IMPORT\_FORMAT\_ERROR. The exception CONNE\_IMPORT\_CONVERSION\_ERROR has been made handleable by assigning it to the existing class CX\_SY\_CONVERSION\_CODEPAGE (change was also transported back to Release 6.40)

The addition [IGNORING CONVERSION ERRORS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_conversion.htm) now also suppresses the exception raised by the fact that the number of bytes of an imported character-like component increases when it is converted to another code page, and therefore no longer fits into the target object. Up to now, only superfluous blanks were cut off without raising an exception (change was also transported back to Release 6.40).

Modification 5

Authorization Check for Users

From Release 7.0, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm) now has the addition FOR USER, which can be used to check the authorizations of any user.

Modification 6

Strings on Selection Screens

In the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm), it is now also possible to specify the data type string after the addition [TYPE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_type.htm).

Modification 7

Format of Lists when Sending

The internal format into which an ABAP list is packed when the send function is called, has been changed. The previous format can still be read. From Release 7.0, to send lists to systems with older releases, the new format must be converted to the previous format using the function module LIST\_CONVERT\_TO\_OLD\_FORMAT.


### abennews-70-cleanup.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

Syntax Cleanup in Release 7.0

For Release 7.0, the ABAP syntax has been cleaned up. Incorrect language constructs, which previously only led to syntax warnings, now cause syntax errors. The profile parameter abap/warn2error\_release can be used to control whether the new syntax errors continue to be reported as syntax warnings.

The following tables show the situations that lead to syntax errors as of Release 7.0. An "X" in the final column of the table indicates that the syntax in question already led to a syntax error in classes before Release 7.0.

Errors in Language Construct

Program Layout

Statement cannot be reached.

X

Missing forward declaration of a class using [CLASS - DEFERRED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_deferred.htm).

\-

Declarations

Program-internal [name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) with more than 30 characters.

X

Special characters in a program-internal [name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm) in obsolete ABAP (non-Unicode).

X

Single digit as the name of a data object.

X

Incorrect [namespace prefix](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennaming_conventions.htm).

X

Operational statement within the definition of a [structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_glosry.htm "Glossary Entry") with BEGIN OF ... END OF.

X

Reference to a data type of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") in a public [parameter interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenparameter_interface_glosry.htm "Glossary Entry")

X

Reference to a data type of the [master program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenframe_program_glosry.htm "Glossary Entry") in the declaration of a public attribute of a global class

\-

Incompatible or non-convertible value specified after DEFAULT for a [formal parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenformal_parameter_glosry.htm "Glossary Entry").

\-

An interface parameter of a function module, which has been defined both as input and output parameter, was declared with different or generic types.

\-

A type of a [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") has the same name as an existing type in ABAP Dictionary.

\-

A constant in a [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") has the same name as an existing [flat structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_structure_glosry.htm "Glossary Entry") or table in ABAP Dictionary.

\-

A [macro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmacro_glosry.htm "Glossary Entry") in a [type group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_group_1_glosry.htm "Glossary Entry") does not have the name of the type group as a prefix.

A reserved component name such as the [pseudo component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line is used in a structure in ABAP Dictionary.

X

Internal table with the predefined name [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm).

\-

ABAP Objects

Unknown global class or interface after [GLOBAL FRIENDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_options.htm).

\-

IMPORTING, CHANGING, or RECEIVING specified in dynamic [CREATE OBJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_explicit.htm).

\-

Missing call of the [instance constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of the [superclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensuperclass_glosry.htm "Glossary Entry") in the instance constructor of a [subclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubclass_glosry.htm "Glossary Entry").

\-

[Instance component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_component_glosry.htm "Glossary Entry") accessed before the call of the [instance constructor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_constructor_glosry.htm "Glossary Entry") of the [superclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensuperclass_glosry.htm "Glossary Entry") in the instance constructor of a [subclass](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubclass_glosry.htm "Glossary Entry").

\-

Short form [static\_meth( a )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_static_short.htm) with a non-unique assignment to a formal parameter.

\-

[Fixture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixture_glosry.htm "Glossary Entry") method in [test class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentest_class_glosry.htm "Glossary Entry") is not private.

\-

Selector \->> used instead of the [instance component selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") \-> when calling interface methods.

\-

Operators and Additions

Invalid one-character operator in a [comparison expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomparison_expression_glosry.htm "Glossary Entry"), which has temporarily been interpreted as an abbreviation, for example, as E for EQ.

\-

AND or OR at the end of a [logical expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_expression_glosry.htm "Glossary Entry") not followed by a logical expression.

\-

More than one LENGTH addition after [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_field.htm).

\-

Addition SORTED BY specified after [COLLECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcollect.htm).

X

Addition LANGUAGE specified after [CREATE OBJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_ole2.htm) for OLE.

X

Additions AND SKIP FIRST SCREEN and USING both specified after [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm).

X

Addition OBJECT missing after [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm).

\-

More than ten FIELD additions after [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapauthority-check.htm).

\-

Operand Positions

Operand cannot be converted in assignment.

\-

Operand that cannot be converted to a number at a numeric operand position (for example, after [DECIMALS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapassign_casting.htm) for ASSIGN).

\-

Length less than or equal to zero in the [offset/length specification](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") for fields of fixed length.

X

Empty [offset/lengths](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") specified.

X

Superfluous trailing blanks in [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry").

X

Line-spanning [text field literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry").

X

Line-spanning element of a bulleted list.

X

Invalid use of a [text symbol](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbol_glosry.htm "Glossary Entry") as the target of a call.

\-

Internal table does not have the structure of a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") in a [comparison expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrelational_expression_glosry.htm "Glossary Entry") after [IN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_select_option.htm).

X

sy-subrc assigned to a CHANGING, EXPORTING, or RETURNING parameter.

X

Data object passed to a formal parameter typed using STRUCTURE in a program of ABAP language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_program_glosry.htm "Glossary Entry"), where the [fragment view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_fragment_view_glosry.htm "Glossary Entry") does not match completely.

\-

Data object specified whose name contains an address specification such as an [instance component selector](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_comp_selector_glosry.htm "Glossary Entry") or an [offset/length specification](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry"), without an explicit assignment to a parameter when using [EXPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexport_data_cluster_param.htm), [IMPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapimport_parameterlist.htm), or [CALL DIALOG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm).

X

Internal Tables

[Table type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_type_glosry.htm "Glossary Entry") defined for a [hashed table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenhashed_table_glosry.htm "Glossary Entry") without specifying UNIQUE before [KEY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptypes_keydef.htm).

\-

Non-[index table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenindex_table_glosry.htm "Glossary Entry") specified after [SEARCH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsearch_itab.htm).

X

Incompatible work area for group level processing using internal tables with [AT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_itab.htm) and [SUM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsum.htm).

X

Component of a structured field symbol specified as a sort criterion after [SORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsort_itab.htm).

Database Accesses

Columns of type STRING or RAWSTRING in [aggregate expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_aggregate.htm), [grouping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgroupby_clause.htm), [sort keys](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaporderby_clause.htm) of [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect.htm).

\-

Projection view accessed in connection with a correlated [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry").

Too many [subqueries](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry") in a SELECT statement.

\-

Work area or rows of an internal table are shorter than the structure of the database table when specifying the rows in [DELETE dbtab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_source.htm).

\-

[Indicator variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexec_host.htm) in [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry"), which is not of the external type INT2.

\-

List Statements

Dynamic position specification in [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [ULINE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapuline.htm) without AT.

X

Negative length len specified after [WRITE AT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm).

\-

Write-protected data object specified after [HIDE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaphide.htm).

X

Note

Programs that so far have used the language constructions stated above must now be considered as incorrect. If the respective positions in the program have been executed, runtime errors or undefined states occurred. The current syntax cleanup is intended to avoid error situations like the ones described here, when they can be recognized statically in advance.


### abennews-70-docu.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70_ehps.htm) →  [Changes in Release 7.0](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-70.htm) → 

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

An alphabetical [subject directory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_subjects.htm) has been added to the ABAP keyword documentation. The index search now evaluates this directory in addition to the [ABAP index](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_index.htm) and [ABAP glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm).

Modification 3

Diagrams

Using access to the MIME repository, diagrams can now be displayed in the ABAP keyword documentation.

Example: [Sessions and Memory Areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmemory_organization.htm)

Modification 4

Language

It is now possible to select the language in which the documentation is displayed on the initial screen of the transaction ABAPHELP. The user can choose between the logon language, English, and German. The logon language is the standard setting. When the ABAP keyword documentation is called from ABAP Editor, the logon language is always used.

Modification 5

List of ABAP Words

The document [ABAP words](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_words.htm) contains a list of all names reserved in ABAP, except for those that consist of special characters. From this list, the user can navigate directly to the occurrences.

Modification 6

Terminology Change for Narrowing and Widening Casts

The use of the terms [narrowing cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennarrowing_cast_glosry.htm "Glossary Entry") and [widening cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwidening_cast_glosry.htm "Glossary Entry"), which refers to the view that a reference variable offers to an object, has been modified to reflect more general usage, which refers to the value set covered by a variable. Now the unambiguous terms [up cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenup_cast_glosry.htm "Glossary Entry") and [down cast](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendown_cast_glosry.htm "Glossary Entry") are now used almost everywhere.

Modification 7

Adjustment of Font Size

If the font size is changed when adjusting the local layout in the SAP GUI, this also applies to the display of the ABAP keyword documentation. Previously, only changes in color affected the ABAP keyword documentation. Within a user session, the GUI font size dependency can be deactivated by setting the standard font size.
