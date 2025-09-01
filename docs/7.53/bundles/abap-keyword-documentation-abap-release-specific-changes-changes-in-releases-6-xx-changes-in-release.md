# ABAP Keyword Documentation / ABAP - Release-Specific Changes / Changes in Releases 6.xx / Changes in Release 6.20

Included pages: 9


### abennews-620.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) → 

Changes in Release 6.20

Changes were made in the following areas as part of development in Release 6.20 of SAP Web Application Server:

[ABAP Objects](javascript:call_link\('abennews-620-objects.htm'\))
[Structure Enhancements](javascript:call_link\('abennews-620-structures.htm'\))
[Handleable Exceptions](javascript:call_link\('abennews-620-exceptions.htm'\))
[Additions](javascript:call_link\('abennews-620-additions.htm'\))
[Short Dumps](javascript:call_link\('abennews-620-dumps.htm'\))
[Tools](javascript:call_link\('abennews-620-tools.htm'\))
[System Classes and Methods](javascript:call_link\('abennews-620-classes.htm'\))
[Further Changes](javascript:call_link\('abennews-620-others.htm'\))

Continue
[ABAP Objects in Release 6.20](javascript:call_link\('abennews-620-objects.htm'\))
[Structure Enhancements in Release 6.20](javascript:call_link\('abennews-620-structures.htm'\))
[New Handleable Exceptions in Release 6.20](javascript:call_link\('abennews-620-exceptions.htm'\))
[Additions in Release 6.20](javascript:call_link\('abennews-620-additions.htm'\))
[Short Dumps in Release 6.20](javascript:call_link\('abennews-620-dumps.htm'\))
[Tools in Release 6.20](javascript:call_link\('abennews-620-tools.htm'\))
[System Classes and Methods in Release 6.20](javascript:call_link\('abennews-620-classes.htm'\))
[Further Changes in Release 6.20](javascript:call_link\('abennews-620-others.htm'\))


### abennews-620-objects.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

ABAP Objects in Release 6.20

[1\. New variant PROVIDE FIELDS](#!ABAP_MODIFICATION_1@1@)
[
2\. Creating objects from the SAP XSLT processor](#!ABAP_MODIFICATION_2@2@)
[
3\. Polymorphism and object services](#!ABAP_MODIFICATION_3@3@)
[
4\. Accessing data references and static class components in JavaScript](#!ABAP_MODIFICATION_4@4@)
[
5\. Kernel methods](#!ABAP_MODIFICATION_5@5@)
[
6\. Recursions of RAISE EVENT](#!ABAP_MODIFICATION_6@6@)

Modification 1

New Variant PROVIDE FIELDS

The statement [PROVIDE FIELDS](javascript:call_link\('abapprovide.htm'\)) makes it possible to process [internal tables](javascript:call_link\('abenitab_oview.htm'\)) without [headers](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"). The functions of the statement PROVIDE are therefore also available under [ABAP Objects](javascript:call_link\('abenabap_objects_oview.htm'\)).

Modification 2

Creating Objects from the SAP XSLT Processor

It is possible to create objects and call class methods from the [SAP XSLT processor](javascript:call_link\('abenxslt_processor_glosry.htm'\) "Glossary Entry"). Now only public methods are allowed, whereas previously private and [protected](javascript:call_link\('abenprotected_glosry.htm'\) "Glossary Entry") methods could also be called.

Parameter passing now supports all ABAP [elementary types](javascript:call_link\('abendata_types.htm'\)), any object references, and the generic types CSEQUENCE and XSEQUENCE. Previously, the types C, D, F, I, N, STRING, and T were supported.

Pass by parameter has been made more strict, so that for the data types D and I only valid specifications are permitted. Value losses for type p are now caught. The values of types X and XSTRING are converted into the [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") standard format [base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry").

Modification 3

Polymorphism and Object Services

The uniqueness of object keys is now checked not only by class, but across the whole inheritance hierarchy. The behavior of the following methods has also been changed:

-   The methods RELEASE and REFRESH\_PERSISTENT behave polymorphically, so that objects of subclasses can also be handled.
    
-   The methods GET\_PERSISTENT and DELETE\_PERSISTENT now access a table of the root class first, to optimize the type determination. Because the type is now stored over multiple transactions, it can no longer be changed.
    
-   By searching in the tables of the root class, the methods CREATE\_PERSISTENT and CREATE\_TRANSIENT now check whether the object key exists in another class of the inheritance hierarchy.
    

Modification 4

Accessing Data References and Static Class Components in JavaScript

Binding JavaScript objects to ABAP objects has been expanded to enable access to data reference variables and [static components](javascript:call_link\('abenstatic_component_glosry.htm'\) "Glossary Entry") (attributes and methods) of classes. In bound internal tables, rows can be deleted using the JS method deleteLines and the JS method append has been renamed appendLine.

Note

Support for the connection of JavaScript to ABAP will be discontinued without replacement in a release after 7.1.

Modification 5

Kernel Methods

The addition BY KERNEL MODULE of the statement [METHOD](javascript:call_link\('abapmethod.htm'\)) makes it possible to implement methods as [kernel methods](javascript:call_link\('abenkernel_methods.htm'\)).

Modification 6

Recursions of RAISE EVENT

The number of possible recursions of the statement [RAISE EVENT](javascript:call_link\('abapraise_event.htm'\)) has been raised from 63 to 1023.


### abennews-620-structures.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

Structure Enhancements in Release 6.20

Since Release 3.0, customers have been able to make changes to SAP's ABAP Dictionary structures and tables using customizing includes or appends. Changes like this, however, can cause problems in programs with active [Unicode checks](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry"). For example, if a character-like-only structure is enhanced, it can lose its character-like nature and hence its fragment view is changed.

In Release 6.20, it has therefore been made possible to classify dictionary structures and tables, so that problems caused by structure enhancements can be easily recognized and dealt with. In the ABAP programming checks, this classification is used to flag up all places in the source code that can cause problems in the context of structure enhancements. These problems are due to syntax errors or modified program behavior caused by structure enhancements. The dictionary categories and their effect in ABAP programs are described in [Enhancement Category](javascript:call_link\('abenddic_structures_enh_cat.htm'\)).


### abennews-620-exceptions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

New Handleable Exceptions in Release 6.20

[1\. Handleable exceptions in method calls](#!ABAP_MODIFICATION_1@1@)

[2\. Handleable exceptions in function module calls](#!ABAP_MODIFICATION_2@2@)

[3\. Handleable exceptions in down casts](#!ABAP_MODIFICATION_3@3@)

[4\. Handleable exceptions in ABAP SQL](#!ABAP_MODIFICATION_4@4@)

[5\. Handleable exceptions in CALL TRANSFORMATION](#!ABAP_MODIFICATION_5@5@)

[6\. Handleable exceptions in GENERATE REPORT*|*SUBROUTINE POOL](#!ABAP_MODIFICATION_6@6@)

[7\. Handleable exceptions in SCAN](#!ABAP_MODIFICATION_7@7@)

[8\. Handleable exceptions in EXPORT TO SHARED MEMORY](#!ABAP_MODIFICATION_8@8@)

[9\. Handleable exceptions in PROVIDE](#!ABAP_MODIFICATION_9@9@)

Modification 1

Handleable Exceptions in Method Calls

The following exceptions can now be handled in [method calls](javascript:call_link\('abenmethod_calls.htm'\)), having been assigned to existing exception classes:

-   CALL\_METHOD\_NOT\_IMPLEMENTED
    
-   CALL\_METHOD\_NOT\_ACCESSIBLE
    
-   CALL\_METHOD\_CONFLICT\_TAB\_TYPE
    
-   CALL\_METHOD\_CONFLICT\_GEN\_TYPE
    
-   CALL\_METHOD\_CONFLICT\_TYPE
    

Modification 2

Handleable Exceptions in Function Module Calls

In [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)), the following exceptions can now be handled, having been assigned to existing exception classes. The new exception class CX\_SY\_DYN\_CALL\_ILLEGAL\_FUNC was introduced only for the first two exceptions in the following list:

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

In [down casts](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry"), the following exceptions can now be handled, having been assigned to an existing exception class:

-   MOVE\_CAST\_ERROR\_DYN
    
-   MOVE\_CAST\_REF\_ONLY
    

Modification 4

Handleable exceptions in ABAP SQL

In ABAP SQL, the following exceptions can now be handled, having been assigned to an existing exception class.

-   ESCAPE\_WITH\_POOLTABLE
    
-   SAPSQL\_CONNECTION\_ILL\_TABTYPE
    

Modification 5

Handleable Exceptions in CALL TRANSFORMATION

The exception classes CX\_SY\_CONVERSION\_NO\_RAW and CX\_SY\_CONVERSION\_NO\_DATE\_TIME have been introduced for the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)).

Modification 6

Handleable Exceptions in GENERATE REPORT *|* SUBROUTINE POOL

The exception class CX\_SY\_GEN\_SOURCE\_TOO\_WIDE has been introduced for the statement [GENERATE REPORT*|*SUBROUTINE POOL](javascript:call_link\('abapgenerate_report.htm'\)).

Modification 7

Handleable Exceptions in SCAN

The exception class CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE has been introduced for the statement [SCAN](javascript:call_link\('abapscan.htm'\)).

Modification 8

Handleable Exceptions in EXPORT TO SHARED MEMORY

The exception CX\_SY\_EXPORT\_NO\_SHARED\_MEMORY has been introduced for [EXPORT TO SHARED MEMORY](javascript:call_link\('abapexport_data_cluster.htm'\)).

Modification 9

Handleable Exceptions in PROVIDE

The exception classes CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP and CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED have been introduced for the new variant of the statement [PROVIDE](javascript:call_link\('abapprovide.htm'\)). These exceptions are not raised by the short form of PROVIDE.


### abennews-620-additions.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

Additions in Release 6.20

[1\. DAYLIGHT SAVING TIME in CONVERT TIME STAMP](#!ABAP_MODIFICATION_1@1@)
[
2\. AS PERSON TABLE in infotypes](#!ABAP_MODIFICATION_2@2@)
[
3\. TO*|*FROM INTERNAL TABLE in EXPORT*|*IMPORT](#!ABAP_MODIFICATION_3@3@)
[
4\. CONNECTION in ABAP SQL](#!ABAP_MODIFICATION_4@4@)
[
5\. SOURCE in CALL TRANSFORMATION](#!ABAP_MODIFICATION_5@5@)
[
6\. VISIBLE LENGTH in SELECTION-SCREEN PUSHBUTTON](#!ABAP_MODIFICATION_6@6@)
[
7\. DISPLAY*|*MEMORY OFFSET in GET*|*SET CURSOR*|*LINE](#!ABAP_MODIFICATION_7@7@)

Modification 1

DAYLIGHT SAVING TIME in CONVERT TIME STAMP

The addition [DAYLIGHT SAVING TIME dst](javascript:call_link\('abapconvert_time-stamp.htm'\)) has been added to the statement CONVERT TIME STAMP tst. This provides a flag in data object dst that indicates whether the time tst is within the summer time.

Modification 2

AS PERSON TABLE in [infotypes](javascript:call_link\('abeninfo_type_glosry.htm'\) "Glossary Entry")

This addition creates an internal table of personal data when [infotype nnnn](javascript:call_link\('abapinfotypes.htm'\)) is declared. The internal table is given the name PPnnnn, unless this was specified explicitly using the addition NAME.

Modification 3

TO*|*FROM INTERNAL TABLE in EXPORT*|*IMPORT

The variant EXPORT ...[](javascript:call_link\('abapexport_data_cluster.htm'\))TO INTERNAL TABLE itab makes it possible to store cluster data in the internal table itab. The variant [IMPORT ... FROM INTERNAL TABLE itab](javascript:call_link\('abapimport_data_cluster.htm'\)) can be used to read this repository again.

Modification 4

CONNECTION in ABAP SQL

The addition CONNECTION enables all [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) statements to use databases other than the standard database. The alternative database systems must be supported by SAP.

Modification 5

SOURCE in CALL TRANSFORMATION

The addition [SOURCE](javascript:call_link\('abapcall_transformation.htm'\)) enables ABAP data and objects to be serialized in a canonical [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") format, where the [SAP XSLT processor](javascript:call_link\('abenxslt_processor_glosry.htm'\) "Glossary Entry") has a direct interface to the serializer. The result of this [XSLT transformation](javascript:call_link\('abenxsl_transformation_1_glosry.htm'\) "Glossary Entry") can be produced as XML data or be converted back into ABAP data and objects.

Modification 6

VISIBLE LENGTH in SELECTION-SCREEN PUSHBUTTON

This addition can be used to change the visible length of pushbuttons for the statement [SELECTION-SCREEN PUSHBUTTON](javascript:call_link\('abapselection-screen_layout.htm'\)).

Modification 7

DISPLAY*|*MEMORY OFFSET in GET*|*SET CURSOR*|*LINE

When OFFSET is specified with the additions DISPLAY or MEMORY in list processing, the statements [GET CURSOR *{* FIELD f *|* LINE l *}*](javascript:call_link\('abapget_cursor_list.htm'\)) and [SET CURSOR *{* FIELD f *|* LINE l*}*](javascript:call_link\('abapset_cursor_list.htm'\)) can be used to specify whether the column in the displayed list or the position in the list buffer is intended. The addition DISPLAY is the standard and can be omitted.


### abennews-620-dumps.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

Short Dumps in Release 6.20

[1\. Displaying work areas](#!ABAP_MODIFICATION_1@1@)
[
2\. Selected variables](#!ABAP_MODIFICATION_2@2@)
[
3\. SNAP variables](#!ABAP_MODIFICATION_3@3@)
[
4\. Display languages](#!ABAP_MODIFICATION_4@4@)

Modification 1

Displaying Work Areas

The system now only displays processed work areas, and the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") directory no longer exists. Instead, only the directory of application tables is displayed, including their administration information.

Modification 2

Selected Variables

The display of selected variables has been improved. The data for all call levels is now displayed, whereas previously only the uppermost call level was displayed. A display of all active calls can be viewed under application calls.

Modification 3

SNAP Variables

The SNAP variable list contains the data for the short dump in compact form, without explanatory text. This data can be stored locally on the front end. Due to the shortened display, this format is suitable for sending, for example as an attachment in a customer problem message.

Modification 4

Display Languages

When [short dumps](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") are displayed, the system now also respects the second language, stored in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") zcsa/second\_language. If no text is found, a note can be created and referred to in the standard text. The search for the short dump text is performed in the following order with respect to language version:

1.  Search for text in logon language
2.  Search for text in second language
3.  Search for text in English
4.  Search for standard text including note created
5.  Search for standard text

As soon as a text is found, the system stops the search and displays the text.


### abennews-620-tools.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

Tools in Release 6.20

[1\. Code Inspector](#!ABAP_MODIFICATION_1@1@)
[
2\. Runtime Monitor](#!ABAP_MODIFICATION_2@2@)
[
3\. Debugger](#!ABAP_MODIFICATION_3@3@)
[
4\. Runtime analysis](#!ABAP_MODIFICATION_4@4@)

Modification 1

Code Inspector

Code Inspector is a tool that enables ABAP programs, function modules, classes, interfaces, and dictionary objects to be checked statically for errors, performance, security, and reliability. The development of these [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") is supported by simple search and check functions. The check results are available in the form of a tree hierarchy

Code Inspector is called for a single object from ABAP Editor by choosing Program → Check → Code Inspector, from Function Builder by choosing Function Module → Code Inspector, or from Class Builder by choosing Object Type → Check → Code Inspector. If more than one repository object needs to be checked, for example all development objects in a package, these can be grouped together in an object set. It is also possible to define check variants with individual checks. A check of all objects in an object set using a specified check variant is called an inspection.

The Code Inspector executes purely static checks that only return hints and clues for an object. The actual runtime behavior can be ascertained using Runtime Analysis or SQL Trace.

Modification 2

Runtime Monitor

The Runtime Monitor is a framework that supports the recording of ABAP program information at runtime. This information can come from tests that are fixed in the ABAP kernel. ABAP programmers can also query and log specific program conditions at runtime.

With Test > Create ABAP Test, the Runtime Monitor creates a class, which can be called to record data in the source code. The data is first compressed in the main memory and periodically transferred to the database in a background job. The tests can be individually activated and deactivated for different servers. Compressing and saving the data hardly affects the [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"), which means that the Runtime Monitor can be used at any time, even in a production operation.

Modification 3

Debugger

-   The display of the memory consumption of dynamic objects has been divided into an overview of the total memory consumption and ranked lists for individual objects. The ranked lists can be compiled according to specific criteria by choosing the function Change Settings. Memory consumption can now be displayed by choosing Goto → Status Display → Memory Usage.
    
-   Breakpoints are defined according to whether they take effect in a HTTP session or in a standard session. HTTP debugging is activated in the editor by choosing Utilities → Settings → HTTP Debugging. Depending on the setting, the system then displays either the HTTP or standard breakpoints in the Editor.
    
-   If, under Settings, the function Check Sorting Before [READ BINARY SEARCH](javascript:call_link\('abapread_table.htm'\)) is selected, the system checks, before every execution of this statement, whether the internal table is sorted. If the table is not sorted, a runtime error occurs. This setting should only be activated shortly before reaching a relevant point in the source code, because there can be a significant loss in performance, depending on the table size.
    
-   If the "Check Sorting Before [PROVIDE](javascript:call_link\('abapprovide.htm'\))" function was selected under settings, the system checks all of the relevant tables - and not just the area specified with extlim1 and extlim2 - for sorting and overlapping intervals when the long form of the PROVIDE statement is executed.
    
-   When displaying exception objects, the system only displayed the key itself in the field display for the TEXTID attribute that contains the OTR key of the text description assigned to the exception. Because this key is generated automatically and is nothing more than a sequence of numbers, assigning the corresponding text to the exception was difficult. The reason for this is that the displayed value had to be compared with the values of all constants generated for the exception. To simplify the assignment, the name of the constant generated for the key is now displayed as a tooltip. For example, in the case of an exception of the type CX\_SY\_FILE\_IO for the TEXTID attribute, the system displays READ\_ERROR or WRITE\_ERROR as a [tooltip](javascript:call_link\('abenquick_info_glosry.htm'\) "Glossary Entry"), depending on whether the exception was raised while reading or writing. The actual value of the attribute is the OTR key of the corresponding text description.
    
-   By choosing Debugging → Session, breakpoints and the settings "System Debugging" and "Always Create Exception Object" can now be saved persistently and reloaded later. The session can be saved by entering a name and expiration date for it. It is then available to other users and sessions, with the selected settings.
    

Modification 4

Runtime Analysis

In Runtime Analysis, it is no longer possible to create temporary variants. Instead, a separate standard variant can be created, which is automatically assigned the user name by the system. Other variants can also be created with the name of the user or the names of other users, as long as a master record exists for them. When runtime analysis is first started, the system always displays the standard variant of the user. If it does not exist, the system displays the SAP standard variant. If runtime analysis is called again, the system always displays the last used variant.

Additionally, the create, delete, and copy functions are again included in the measurement restrictions block on the initial screen. While create and copy can only be executed as single functions, the F4 key can be used to delete multiple variants.


### abennews-620-classes.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

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

Class CL\_ABAP\_TSTMP has been introduced for calculating with [time stamps](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry").

Modification 2

Class for Formatting Lists

Class CL\_ABAP\_LIST\_UTILITIES has been introduced to calculate output lengths, convert values from the list buffer, and define field limits. With the return values for their methods, a correct column alignment for ABAP lists can be programmed (even when Eastern Asian scripts are displayed).

The objects in a list can be displayed in different output lengths by specifying the required length in the menu under System → List → Unicode Display. This is of particular use with screen lists where the output is cut off, which is displayed by the characters (\> or <).

Modification 3

Error Handling of Exceptions

Interfaces IF\_MESSAGE and IF\_SERIALIZABLE\_OBJECT have been added to class CX\_ROOT, the global superclass for all exceptions. Texts from classes that implement these interfaces are edited as message texts. Using method GET\_LONG\_TEXT, the long text for an exception text is provided.

Modification 4

Methods for Determining Type Attributes

Two new methods have been introduced in class CL\_ABAP\_DATADESCR for determining type attributes at runtime ([RTTI](javascript:call_link\('abenrtti.htm'\))):

-   Method IS\_READ\_ONLY determines whether a reference data object is write-protected.
    
-   Method APPLIES\_TO\_DATA\_REF executes a type check between the description and the data object. This makes it possible to determine the compatibility of data objects.


### abennews-620-others.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

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
7\. Compatibility in structure typing](#!ABAP_MODIFICATION_7@7@)
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

An internal table created as a data type in ABAP Dictionary can be assigned an initial number of rows. This specification in the dictionary has the same effect as the [INITIAL SIZE](javascript:call_link\('abapdata_itab.htm'\)) addition in the ABAP source code. Therefore, all the information that describes a table, such as table category, key, row number, and type, are also available in the dictionary.

Modification 2

Relevant Language Key in Dictionary Structures

For error-free conversion of data that is swapped between [Unicode](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and non-Unicode systems, you can specify the structure components responsible for the relevant language key in ABAP Dictionary. If necessary, this information can be queried in the [remote function call](javascript:call_link\('abenrfc.htm'\)).

Modification 3

New Functions in the Extended Program Check

The following changes have been made to the extended program check:

-   Errors in included [type groups](javascript:call_link\('abaptype-pools.htm'\)) are no longer displayed.
    
-   An [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) outside a loop causes a warning.
    
-   All characters in the ABAP source code, especially special characters that do not comply with the [naming conventions](javascript:call_link\('abentype_names.htm'\)), trigger a warning.
    
-   All [structure enhancements](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) whose ABAP source code indicate potential runtime errors or changed program behavior trigger a warning.
    

Modification 4

Handling IMPORTING Parameters with CREATE

Formal parameters of methods that were passed to the method using IMPORTING and referenced there using [CREATE](javascript:call_link\('abapcreate_object.htm'\)) can no longer be overwritten. This check, which was previously not executed till runtime, is now caught by the syntax check.

Modification 5

Secondary Language Access for Text Elements

Secondary language access is now available for report titles, [list headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry"), selection texts, text symbols, and texts specified dynamically of the form [ASSIGN ('TEXT-nnn') TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)). If the text pool does not exist in the logon language, the system loads the text pool that matches the entry in the profile parameter zcsa/second\_language.
Until now, text elements that were not available in the text pool for the language lg remained unaltered by the statement [SET LANGUAGE lg](javascript:call_link\('abapset_language.htm'\)). In the context of this change, these texts are now reset to their initial value.

Modification 6

System Field sy-toccu Obsolete

In the statements READ TABLE, LOOP AT itab, and DESCRIBE TABLE, the system field sy-toccu is no longer filled.

Modification 7

Compatibility in Structure Typing

If structures are passed to formal parameters and function modules typed using STRUCTURE, or assigned to similarly typed field symbols, closing alignment gaps are now also respected by the type check.

Modification 8

Lengths Specified in the Statement WRITE

As of Release 6.20, the output length can be specified using the variants [WRITE AT (\*)](javascript:call_link\('abapwrite-.htm'\)) and [WRITE AT (\*\*)](javascript:call_link\('abapwrite-.htm'\)), as well as using numeric data objects.

Modification 9

XML Serialization and XML Deserialization

Objects and data references can now also be serialized and deserialized in [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") serialization and XML deserialization.

1.  Objects are only serialized if the class implements the interface IF\_SERIALIZABLE\_OBJECT.
2.  Data references can only be serialized if the referenced type is not anonymous.
    

Modification 10

Static Method Call from XSLT

It is now also possible to call public [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") from [XSLT programs](javascript:call_link\('abenxsl_transformation_1_glosry.htm'\) "Glossary Entry").

Modification 11

Addition USER-COMMAND after PARAMETERS ... AS LISTBOX

The addition USER-COMMAND can be specified for the statement [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) together with the addition [AS LISTBOX](javascript:call_link\('abapparameters_screen.htm'\)).

Modification 12

Wider Frame on Selection Screens

The standard maximum width of a frame around a block created using [SELECTION-SCREEN](javascript:call_link\('abapselection-screen_block.htm'\)) is now 120 columns. It was previously 83 columns.
