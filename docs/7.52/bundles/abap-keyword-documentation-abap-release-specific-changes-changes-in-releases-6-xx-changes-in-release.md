# ABAP - Keyword Documentation / ABAP - Release-Specific Changes / Changes in Releases 6.xx / Changes in Release 6.20

Included pages: 9


### abennews-620.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) → 

Changes in Release 6.20

The following topics were included in the development for Release 6.20 of the SAP Web Application Server:

[ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-objects.htm)
[Structure Enhancements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-structures.htm)
[Exceptions that Can Be Handled](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-exceptions.htm)
[Additions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-additions.htm)
[Short Dumps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-dumps.htm)
[Tools](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-tools.htm)
[System Classes and Methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-classes.htm)
[Further Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-others.htm)

Continue
[ABAP Objects in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-objects.htm)
[Structure Enhancements in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-structures.htm)
[New Handleable Exceptions in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-exceptions.htm)
[Additions in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-additions.htm)
[Short Dumps in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-dumps.htm)
[Tools in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-tools.htm)
[System Classes and Methods in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-classes.htm)
[Further Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620-others.htm)


### abennews-620-objects.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

ABAP Objects in Release 6.20

[1\. New Variant PROVIDE FIELDS](#!ABAP_MODIFICATION_1@1@)
[
2\. Creating Objects from the SAP XSLT Processor](#!ABAP_MODIFICATION_2@2@)
[
3.Polymorphism and Object Services](#!ABAP_MODIFICATION_3@3@)
[
4\. Accessing Data References and Static Class Components in JavaScript](#!ABAP_MODIFICATION_4@4@)
[
5\. Kernel Methods](#!ABAP_MODIFICATION_5@5@)
[
6\. Recursions of RAISE EVENT](#!ABAP_MODIFICATION_6@6@)

Modification 1

New Variant PROVIDE FIELDS

The [PROVIDE FIELDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm) statement allows you to process [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_oview.htm) without [headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry"). The functions of the PROVIDE statement are therefore also available under [ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_objects_oview.htm).

Modification 2

Creating Objects from the SAP XSLT Processor

It is possible to create objects and call class methods from the [SAP XSLT processor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxslt_processor_glosry.htm "Glossary Entry"). Now only public methods are allowed, whereas previously you could also call private and [protected](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprotected_glosry.htm "Glossary Entry") methods.

The transfer of parameters now supports all ABAP [elementary types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_types.htm), any object references, and the generic types CSEQUENCE and XSEQUENCE. Previously, the types C, D, F, I, N, STRING, and T were supported.

The transfer has been tightened, so that for the data types D and I only valid specifications are permitted. Value losses for type p are now caught. The values of types X and XSTRING are converted into the [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") standard format [base64](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbase64_glosry.htm "Glossary Entry").

Modification 3

Polymorphism and Object Services

The uniqueness of object keys is now checked not only by class, but across the whole inheritance hierarchy. The behavior of the following methods has also been changed:

-   The methods RELEASE and REFRESH\_PERSISTENT behave polymorphically, so that objects of subclasses can also be handled.
    
-   The methods GET\_PERSISTENT and DELETE\_PERSISTENT now access a table of the root class first, to optimize the type determination. Because the type is now stored over several transactions, it can no longer be changed.
    
-   By searching in the tables of the root class, the methods CREATE\_PERSISTENT and CREATE\_TRANSIENT now check whether the object key exists in another class of the inheritance hierarchy.
    

Modification 4

Accessing Data References and Static Class Components in JavaScript

Binding JavaScript objects to ABAP objects has been extended to allow you to access data reference variables and [static components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_component_glosry.htm "Glossary Entry") (attributes and methods) of classes. In bound internal tables, you can delete rows using the JS method deleteLines and the JS method append has been renamed appendLine.

Note

Support for the connection of JavaScript to ABAP will be discontinued without replacement in a release after 7.1.

Modification 5

Kernel Methods

The BY KERNEL MODULE addition to the [METHOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmethod.htm) statement allows you implement methods as [kernel methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkernel_methods.htm).

Modification 6

Recursions of RAISE EVENT

The number of possible recursions of the statement [RAISE EVENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapraise_event.htm) has been raised from 63 to 1023.


### abennews-620-structures.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

Structure Enhancements in Release 6.20

Since Release 3.0, customers have been able to make changes to SAP's ABAP Dictionary structures and tables using customizing includes or appends. Changes like this, however, can cause problems in programs with active [Unicode checks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_check_glosry.htm "Glossary Entry"). For example, if a character-type-only structure is enhanced, it can lose its character-type nature and hence its fragment view is changed.

In Release 6.20, it has therefore been made possible to classify dictionary structures and tables, so that problems caused by structure enhancements can be easily recognized and dealt with. In the ABAP programming checks, this classification is used to flag up all places in the source code that can cause problems in the context of structure enhancements. These problems are due to syntax errors or modified program behavior caused by structure enhancements. The dictionary categories and their effect in ABAP programs are described in [Enhancement Category](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_enh_cat.htm).


### abennews-620-exceptions.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

New Handleable Exceptions in Release 6.20

[1\. Handleable exceptions in method calls](#!ABAP_MODIFICATION_1@1@)

[2\. Handleable exceptions in function module calls](#!ABAP_MODIFICATION_2@2@)

[3\. Handleable exceptions in down casts](#!ABAP_MODIFICATION_3@3@)

[4\. Handleable exceptions in Open SQL](#!ABAP_MODIFICATION_4@4@)

[5\. Handleable exceptions in CALL TRANSFORMATION](#!ABAP_MODIFICATION_5@5@)

[6\. Handleable exceptions in GENERATE REPORT*|*SUBROUTINE POOL](#!ABAP_MODIFICATION_6@6@)

[7\. Handleable exceptions in SCAN](#!ABAP_MODIFICATION_7@7@)

[8\. Handleable exceptions in EXPORT TO SHARED MEMORY](#!ABAP_MODIFICATION_8@8@)

[9\. Handleable exceptions in PROVIDE](#!ABAP_MODIFICATION_9@9@)

Modification 1

Handleable Exceptions in Method Calls

The following exceptions can now be handled in [method calls](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmethod_calls.htm), having been assigned to existing exception classes:

-   CALL\_METHOD\_NOT\_IMPLEMENTED
    
-   CALL\_METHOD\_NOT\_ACCESSIBLE
    
-   CALL\_METHOD\_CONFLICT\_TAB\_TYPE
    
-   CALL\_METHOD\_CONFLICT\_GEN\_TYPE
    
-   CALL\_METHOD\_CONFLICT\_TYPE
    

Modification 2

Handleable Exceptions in Function Module Calls

In [CALL FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_function.htm), the following exceptions can now be handled, having been assigned to existing exception classes. The new exception class CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC was introduced only for the first two exceptions in the following list:

-   CALL\_FUNCTION\_NOT\_ACTIVE
    
-   CALL\_FUNCTION\_NOT\_FOUND
    
-   CALL\_FUNCTION\_PARM\_MISSING
    
-   CALL\_FUNCTION\_PARAM\_NOT\_FOUND
    
-   CALL\_FUNCTION\_CONFLICT\_GEN\_TYP
    
-   CALL\_FUNCTION\_CONFLICT\_LENG
    
-   CALL\_FUNCTION\_CONFLICT\_TYPE
    
-   CALL\_CALL\_FUNCTION\_NO\_VB
    
-   CALL\_FUNCTION\_WRONG\_ALIGNMENT
    

Modification 3

Handleable Exceptions in Down Casts

In [down casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry"), the following exceptions can now be handled, having been assigned to an existing exception class:

-   MOVE\_CAST\_ERROR\_DYN
    
-   MOVE\_CAST\_REF\_ONLY
    

Modification 4

Handleable Exceptions and Open SQL

In Open SQL, the following exceptions can now be handled, having been assigned to an existing exception class.

-   ESCAPE\_WITH\_POOLTABLE
    
-   SAPSQL\_CONNECTION\_ILL\_TABTYPE
    

Modification 5

Handleable Exceptions in CALL TRANSFORMATION

The exception classes CX\_SY\_CONVERSION\_NO\_RAW and CX\_SY\_CONVERSION\_NO\_DATE\_TIME have been introduced for the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm).

Modification 6

Handleable Exceptions in GENERATE REPORT *|* SUBROUTINE POOL

The exception class CX\_SY\_GEN\_SOURCE\_TOO\_WIDE has been introduced for the statement [GENERATE REPORT*|*SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_report.htm).

Modification 7

Handleable Exceptions in SCAN

The exception class CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE has been introduced for the statement [SCAN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapscan.htm).

Modification 8

Handleable Exceptions in EXPORT TO SHARED MEMORY

The exception CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY has been introduced for [EXPORT TO SHARED MEMORY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm).

Modification 9

Handleable Exceptions in PROVIDE

The exception classes CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP and CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED have been introduced for the new variant of the statement [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm). These exceptions are not raised by the short form of PROVIDE.


### abennews-620-additions.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

Additions in Release 6.20

[1\. DAYLIGHT SAVING TIME in CONVERT TIME STAMP](#!ABAP_MODIFICATION_1@1@)
[
2\. AS PERSON TABLE in infotypes](#!ABAP_MODIFICATION_2@2@)
[
3\. TO*|*FROM INTERNAL TABLE in EXPORT*|*IMPORT](#!ABAP_MODIFICATION_3@3@)
[
4\. CONNECTION in Open SQL](#!ABAP_MODIFICATION_4@4@)
[
5\. SOURCE in CALL TRANSFORMATION](#!ABAP_MODIFICATION_5@5@)
[
6\. VISIBLE LENGTH in SELECTION-SCREEN PUSHBUTTON](#!ABAP_MODIFICATION_6@6@)
[
7\. DISPLAY*|*MEMORY OFFSET in GET*|*SET CURSOR*|*LINE](#!ABAP_MODIFICATION_7@7@)

Modification 1

DAYLIGHT SAVING TIME in CONVERT TIME STAMP

The addition [DAYLIGHT SAVING TIME dst](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapconvert_time-stamp.htm) has been added to the statement CONVERT TIME STAMP tst. This provides a flag in data object dst that indicates whether the time tst is within the summer time.

Modification 2

AS PERSON TABLE in [Infotypes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninfo_type_glosry.htm "Glossary Entry")

This addition creates an internal table of personal data when [infotype nnnn](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinfotypes.htm) is declared. The internal table is given the name PPnnnn, unless this was specified explicitly using the addition NAME.

Modification 3

TO*|*FROM INTERNAL TABLE in EXPORT*|*IMPORT

The variant [EXPORT ... TO INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm) enables cluster data to be saved in the internal table itab. The variant [IMPORT ... FROM INTERNAL TABLE itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm) can be used to read this repository again.

Modification 4

CONNECTION in Open SQL

The addition CONNECTION enables all [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) statements to use databases other than the standard database. The alternative database systems must be supported by SAP.

Modification 5

SOURCE in CALL TRANSFORMATION

The addition [SOURCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm) enables ABAP data and objects to be serialized in a canonical [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") format, where the [SAP XSLT processor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxslt_processor_glosry.htm "Glossary Entry") has a direct interface to the serializer. The result of this [XSLT transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsl_transformation_1_glosry.htm "Glossary Entry") can be produced as XML data or be converted back into ABAP data and objects.

Modification 6

VISIBLE LENGTH in SELECTION-SCREEN PUSHBUTTON

This addition can be used to change the visible length of pushbuttons for the statement [SELECTION-SCREEN PUSHBUTTON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_layout.htm).

Modification 7

DISPLAY*|*MEMORY OFFSET in GET*|*SET CURSOR*|*LINE

When OFFSET is specified with the additions DISPLAY or MEMORY in list processing, the statements [GET CURSOR *{* FIELD f *|* LINE l *}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_cursor_list.htm) and [SET CURSOR *{* FIELD f *|* LINE l*}*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_cursor_list.htm) can be used to specify whether the column in the displayed list or the position in the list buffer is intended. The addition DISPLAY is the standard and can be omitted.


### abennews-620-dumps.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

Short Dumps in Release 6.20

[1\. Display of Work Areas](#!ABAP_MODIFICATION_1@1@)
[
2\. Selected Variables](#!ABAP_MODIFICATION_2@2@)
[
3\. SNAP Variable](#!ABAP_MODIFICATION_3@3@)
[
4\. Display Languages](#!ABAP_MODIFICATION_4@4@)

Modification 1

Display of Work Areas

The system now only displays processed work areas, and the [data area](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_area_glosry.htm "Glossary Entry") directory no longer exists. Instead you only see the directory of application tables including their administration information.

Modification 2

Selected Variables

The display of selected variables has been extended. You can now see the data for all call levels, whereas previously only the uppermost call level was displayed. You can see a display of all active calls under application calls.

Modification 3

SNAP Variable

The SNAP variable list contains the data for the short dump in compact form, without explanatory text. This data can be stored locally on the front end. Due to the shortened display, this format is suitable for sending, for example as an attachment in a customer problem message.

Modification 4

Display Languages

When [short dumps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshort_dump_glosry.htm "Glossary Entry") are displayed, the system now also takes the second language, stored in the [profile parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") zcsa/second\_language, into account. If no text is found, you can create a note and refer to it in the standard text. The search for the short dump text is carried out in the following order, with regard to language version:

1.  Search for text in logon language
2.  Search for text in second language
3.  Search for text in English
4.  Search for standard text including note created
5.  Search for standard text

As soon as a text is found, the system stops the search and displays the text.


### abennews-620-tools.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

Tools in Release 6.20

[1\. Code Inspector](#!ABAP_MODIFICATION_1@1@)
[
2\. Run Time Monitor](#!ABAP_MODIFICATION_2@2@)
[
3\. Debugger](#!ABAP_MODIFICATION_3@3@)
[
4\. Runtime Analysis](#!ABAP_MODIFICATION_4@4@)

Modification 1

Code Inspector

The Code Inspector is a tool that allows you statically check ABAP programs, function modules, classes, interfaces, and Dictionary objects for errors, performance, security, and reliability. The development of these [repository objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_object_glosry.htm "Glossary Entry") is supported by simple search and check functions. The check results are available in the form of a tree hierarchy

The Code Inspector is called for a single object from the ABAP Editor by choosing Program → Check → Code Inspector, from the Function Builder by choosing Function Module → Code Inspector, or from the Class Builder by choosing Object Type → Check → Code Inspector. If you wish to check several Repository objects, for example all development classes in a package, then these can be grouped together in an object set. You also have the possibility of defining check variants with individual checks. A check of all objects in an object set using a specified check variant is called an inspection.

The Code Inspector executes purely static checks that only return hints and clues for an object. The actual runtime behavior can be ascertained using Runtime Analysis or SQL Trace.

Modification 2

Runtime Monitor

The Runtime Monitor is a framework that supports the recording of ABAP program information at runtime. This information can come from tests that are fixed in the ABAP kernel. ABAP programmers can also query and log specific program conditions at runtime.

With Test > Create ABAP Test, the Runtime Monitor creates a class, which can be called to record data in the source code. The data is first compressed in the main memory and periodically transferred to the database in a background job. The tests can be individually activated and deactivated for different servers. Compressing and saving the data hardly affects the [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry"), which means that the Runtime Monitor can be used at any time, even in a production operation.

Modification 3

Debugger

-   The display of the memory consumption of dynamic objects has been divided into an overview of the total memory consumption and ranked lists for individual objects. You can compile the ranked lists according to specific criteria by choosing the function Change Settings. You can now display memory consumption by choosing Goto → Status Display → Memory Usage.
    
-   Breakpoints are defined according to whether they take effect in a http session or in a standar session. http debugging is activated in the Editor by choosing Utilities → Settings → HTTP Debugging. Depending on the setting, the system then displays either the http or standard breakpoints in the Editor.
    
-   If, under Settings, you selected the function Check Sorting Before [READ BINARY SEARCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table.htm), the system checks, before every execution of this statement, whether the internal table is sorted. If the table is not sorted, a runtime error occurs. You should only activate this setting shortly before reaching a relevant point in the source code, because there can be a significant loss in performance, depending on the table size.
    
-   If you checked the "Check Sorting Before [PROVIDE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprovide.htm)" function under settings, the system checks all of the relevant tables - and not just the area specified with extlim1 and extlim2 - for sorting and overlapping intervals when the long form of the PROVIDE statement is executed.
    
-   When displaying exception objects, the system only displayed the key itself in the field display for the TEXTID attribute that contains the OTR key of the text description assigned to the exception. Because this key is generated automatically and is nothing more than a sequence of numbers, assigning the corresponding text to the exception was difficult. The reason for this is that the displayed value had to be compared with the values of all constants generated for the exception. To simplify the assignment, the name of the constant generated for the key is now displayed as a tooltip. For example, in the case of an exception of the type CX\_SY\_FILE\_IO for the TEXTID attribute, the system displays READ\_ERROR or WRITE\_ERROR as a [tooltip](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquick_info_glosry.htm "Glossary Entry"), depending on whether the exception was raised while reading or writing. The actual value of the attribute is the OTR key of the corresponding text description.
    
-   By choosing Debugging → Session, you can now save breakpoints and the settings "System Debugging" and "Always Create Exception Object" persistently and reload them later. You can save the session, entering a name and expiry date for it. It is then available to other users and sessions, with the selected settings.
    

Modification 4

Runtime Analysis

In Runtime Analysis, you can no longer create temporary variants. Instead, you can create a separate standard variant, which is automatically assigned the user name by the system. You can also create other variants with your own name or that of other users, as long as a master record exists for them. When you first start the runtime analysis, the system always display your own standard variant. If it does not exist, the system displays the SAP standard variant. If you call the runtime analysis again, the system always displays the last used variant.

Additionally, the create, delete, and copy functions are again included in the measurement restrictions block on the initial screen. While create and copy can only be executed as single functions, you can use the F4 key to delete multiple variants.


### abennews-620-classes.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

System Classes and Methods in Release 6.20

[1\. Class for calculating with time stamps](#!ABAP_MODIFICATION_1@1@)
[
2\. Class for formatting lists](#!ABAP_MODIFICATION_2@2@)
[
3\. Error handling of exceptions](#!ABAP_MODIFICATION_3@3@)
[
4\. Methods for determining type attributes](#!ABAP_MODIFICATION_4@4@)

Modification 1

Class for Calculating with Time Stamps

Class CL\_ABAP\_TSTMP has been introduced for calculating with [time stamps](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_stamp_glosry.htm "Glossary Entry").

Modification 2

Class for Formatting Lists

Class CL\_ABAP\_LIST\_UTILITIES has been introduced to calculate output lengths, convert values from the list buffer, and define field limits. With the return values for their methods, a correct column alignment for ABAP lists can be programmed (even when Eastern Asian scripts are displayed).

The objects in a list can be displayed in different output lengths by specifying the required length in the menu under System → List → Unicode Display. This is of particular use with screen lists where the output is cut off, which is displayed by the characters (\> or <).

Modification 3

Error Handling of Exceptions

Interfaces IF\_MESSAGE and IF\_SERIALIZABLE\_OBJECT have been added to class CX\_ROOT, the global superclass for all exceptions. Texts from classes that implement these interfaces are edited as message texts. Using method GET\_LONG\_TEXT, the long text for an exception text is provided.

Modification 4

Methods for Determining Type Attributes

Two new methods have been introduced in class CL\_ABAP\_DATADESCR for determining type attributes at runtime [(RTTI)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrtti.htm):

-   Method IS\_READ\_ONLY determines whether a reference data object is write-protected.
    
-   Method APPLIES\_TO\_DATA\_REF executes a type check between the description and the data object. This makes it possible to determine the compatibility of data objects.


### abennews-620-others.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.20](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-620.htm) → 

Further Changes in Release 6.20

[1\. Parameter INITIAL SIZE for internal tables](#!ABAP_MODIFICATION_1@1@)
[
2\. Relevant language key in dictionary structures](#!ABAP_MODIFICATION_2@2@)
[
3\. New functions in the extended program check](#!ABAP_MODIFICATION_3@3@)
[
4\. Handling IMPORTING parameters with CREATE](#!ABAP_MODIFICATION_4@4@)
[
5\. Secondary language access for text elements](#!ABAP_MODIFICATION_5@5@)
[
6\. System field sy-toccu obsolete](#!ABAP_MODIFICATION_6@6@)
[
7\. Compatibility in structure typings](#!ABAP_MODIFICATION_7@7@)
[
8\. Lengths specified in the statement WRITE](#!ABAP_MODIFICATION_8@8@)
[
9\. XML serialization and XML deserialization](#!ABAP_MODIFICATION_9@9@)
[
10\. Static method call from XSLT](#!ABAP_MODIFICATION_10@10@)
[
11\. Addition USER-COMMAND after PARAMETERS ... AS LISTBOX](#!ABAP_MODIFICATION_11@11@)
[
12\. Wider frame on selection screens](#!ABAP_MODIFICATION_12@12@)

Modification 1

Parameter INITIAL SIZE for Internal Tables

An internal table created as a data type in ABAP Dictionary can be assigned an initial number of rows. This assignment in the dictionary has the same effect as the addition [INITIAL SIZE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_itab.htm) in the ABAP source code. Therefore, all the information that describes a table, such as table category, key, row number, and type, are also available in the dictionary.

Modification 2

Relevant Language Key in Dictionary Structures

For error-free conversion of data that is swapped between [Unicode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry") and non-Unicode systems, the structure components responsible for the relevant language key can be specified in ABAP Dictionary. If necessary, this information can be queried in the [remote function call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc.htm).

Modification 3

New Functions in the Extended Program Check

The following changes have been made to the extended program check:

-   Errors in included [type groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptype-pools.htm) are no longer displayed.
    
-   An [INSERT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm) outside a loop causes a warning.
    
-   All characters in the ABAP source code, especially special characters that do not comply with the [naming conventions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_names.htm), trigger a warning.
    
-   All [structure enhancements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_enh_cat.htm) whose ABAP source code indicate potential runtime errors or changed program behavior trigger a warning.
    

Modification 4

Handling IMPORTING Parameters with CREATE

Formal parameters of methods that were passed to the method using IMPORTING and referenced there using [CREATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object.htm) can no longer be overwritten. This check, which was previously not executed till runtime, is now caught by the syntax check.

Modification 5

Secondary Language Access for Text Elements

Secondary language access is now available for report titles, [list headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_header_glosry.htm "Glossary Entry"), selection texts, text symbols, and texts specified dynamically of the form [ASSIGN ('TEXT-nnn') TO <fs>](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassign_mem_area_dynamic_dobj.htm). If the text pool does not exist in the logon language, the system loads the text pool that matches the entry in the profile parameter zcsa/second\_language.
Until now, text elements that were not available in the text pool for the language lg remained unaltered by the statement [SET LANGUAGE lg](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_language.htm). In the context of this change, these texts are now reset to their initial value.

Modification 6

System Field sy-toccu Obsolete

In the statements READ TABLE, LOOP AT itab, and DESCRIBE TABLE, the system field sy-toccu is no longer filled.

Modification 7

Compatibility for Structure Typing

If structures are passed to formal parameters and function modules typed using STRUCTURE, or assigned to similarly typed field symbols, closing alignment gaps are now also respected by the type check.

Modification 8

Lengths Specified in the Statement WRITE

As of Release 6.20, the output length can be specified using the variants [WRITE AT (\*)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) and [WRITE AT (\*\*)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm), as well as using numeric data objects.

Modification 9

XML Serialization and XML Deserialization

Objects and data references can now also be serialized and deserialized in [XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxml_glosry.htm "Glossary Entry") serialization and XML deserialization.

1.  Objects are only serialized if the class implements the interface IF\_SERIALIZABLE\_OBJECT.
2.  Data references can only be serialized if the referenced type is not anonymous.
    

Modification 10

Static Method Call from XSLT

It is now also possible to call public [static methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstatic_method_glosry.htm "Glossary Entry") from [XSLT programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenxsl_transformation_1_glosry.htm "Glossary Entry").

Modification 11

Addition USER-COMMAND after PARAMETERS ... AS LISTBOX

The addition USER-COMMAND can be specified for the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters.htm) together with the addition [AS LISTBOX](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_screen.htm).

Modification 12

Wider Frame on Selection Screens

The standard maximum width of a frame around a block created using [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_block.htm) is now 120 columns. It was previously 83 columns.
