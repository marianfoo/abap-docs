# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / ABAP and OLE

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenole2.htm)
- [abapcreate_object_ole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_ole2.htm)
- [abapcall_method_ole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_ole2.htm)
- [abapget_property.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_property.htm)
- [abapset_property.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_property.htm)
- [abapfree_object.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_object.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.183Z

---

### abenole2.htm

> **📖 Official SAP Documentation**: [abenole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenole2.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) → 

ABAP and OLE

ABAP can be used to edit automation objects whose functions are available in the presentation layer in the form of an OLE Automation server. Only automation objects for Windows are supported. Typical applications that offer an automation interface are Microsoft Office products Excel and Word, for which the published classes and their attributes and methods are found in the object directory of Visual Basic Editor called using the Macro menu option.

All automation applications that can be used by ABAP are contained in the database table TOLE, which is edited using transaction SOLE. This table contains the names of the classes and components supported by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry"). It also contains type information for adapting different data formats. The automation command set consists of the following ABAP statements:

-   [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\))

-   [CALL METHOD](javascript:call_link\('abapcall_method_ole2.htm'\))

-   [GET PROPERTY](javascript:call_link\('abapget_property.htm'\))

-   [SET PROPERTY](javascript:call_link\('abapset_property.htm'\))

-   [FREE OBJECT](javascript:call_link\('abapfree_object.htm'\)),

where CREATE OBJECT and CALL METHOD should not be confused with the ABAP Objects statements using the same syntax.

The statements of the automation command set are passed from the ABAP runtime environment to the SAP GUI on the current presentation server responsible for the actual communication with the automation server. The statements are not passed directly and are first buffered in an automation queue and passed together to SAP GUI in a flush call. By default, a flush is triggered by the next ABAP statement that does not belong to the automation command set.

Note

For editing some of the automation objects, the more general interfaces SAP Desktop Office Integration (DOI) and Control Framework (CFW) are now available. The statements of the automation command set should be used only to access automation applications for which there is no such wrapping.

Continue
[CREATE OBJECT - OLE](javascript:call_link\('abapcreate_object_ole2.htm'\))
[CALL METHOD - OLE](javascript:call_link\('abapcall_method_ole2.htm'\))
[GET PROPERTY - OLE](javascript:call_link\('abapget_property.htm'\))
[SET PROPERTY - OLE](javascript:call_link\('abapset_property.htm'\))
[FREE OBJECT - OLE](javascript:call_link\('abapfree_object.htm'\))



**📖 Source**: [abenole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenole2.htm)

### abapcreate_object_ole2.htm

> **📖 Official SAP Documentation**: [abapcreate_object_ole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_ole2.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

CREATE OBJECT - OLE

[Quick Reference](javascript:call_link\('abapcreate_object_ole_shortref.htm'\))

Syntax

CREATE OBJECT ole class *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Extras:

[1\. ... NO FLUSH](#!ABAP_ADDITION_1@1@)
[2\. ... QUEUE-ONLY](#!ABAP_ADDITION_2@2@)

Effect

This statement creates the automation object ole of the automation class class. The object ole must be of type ole2\_object, which is defined in ABAP Dictionary in the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") OLE2. The automation class class expects a character-like data object is expected that contains the name of the class.

The system automatically executes an authorization check if the column AUTH\_CHK in the database table TOLE contains the value "X" for the class. The authorization status can be checked with the function module AUTHORITY\_CHECK\_OLE.

System Fields

sy-subrc

Meaning

0

Automation object created.

1

Error in communication to the SAP GUI

2

Error in function call in the SAP GUI

3

Problems with memory allocation in the presentation layer.

Notes

-   For the declaration of ole, exactly the type ole2\_object must be specified. It is not sufficient to specify another type declared with a reference to ole2\_object.
    
-   An automation object ole created using CREATE OBJECT ole must also be released by using FREE OBJECT ole to avoid memory bottle necks and terminations of the application to be controlled.
    
-   CREATE OBJECT for OLE should not be confused with the statement of the same name in ABAP Objects.
    

Addition 1

... NO FLUSH

Effect

When using the addition NO FLUSH, calls from automation methods are collected in the automation buffer until the function module FLUSH (which is provided for this purpose) is called and the FREE OBJECT statement is passed or, at the most, until a change of [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"). They are then passed to the automation server in the current presentation layer for asynchronous execution. Without this addition, the flush is executed and the pass takes place as soon as a statement that does not belong to the automation command set is reached. Note that in the ABAP Debugger, the return values of the individual automation statements are not available until after the pass to the presentation layer.

Addition 2

... QUEUE-ONLY

Effect

The addition QUEUE-ONLY dictates that, in flushes, the new object is not passed to the specified ABAP data object rc as a return code using methods called by CALL METHOD OF. In this case, the automation buffer can only contain the statements CREATE OBJECT, CALL METHOD, and GET PROPERTY using the addition QUEUE-ONLY. When executing the program in the ABAP Debugger, the return values are passed by default.

Example

In this example, the automation object app is created, which has access to all methods and attributes of the class APPLICATION in the MS Excel Library. This class contains methods with which, for example, an Excel document can be opened or copied.

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application' NO FLUSH.



**📖 Source**: [abapcreate_object_ole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_ole2.htm)

### abapcall_method_ole2.htm

> **📖 Official SAP Documentation**: [abapcall_method_ole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_ole2.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

CALL METHOD - OLE

[Quick Reference](javascript:call_link\('abapcall_method_of_ole_shortref.htm'\))

Syntax

CALL METHOD OF ole meth *\[*\= rc*\]*
               *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*
               *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Extras:

[1.... EXPORTING p1 = f1 p2 = f2 ...](#!ABAP_ADDITION_1@1@)
[2.... NO FLUSH](#!ABAP_ADDITION_2@2@)
[3.... QUEUE-ONLY](#!ABAP_ADDITION_3@3@)

Effect

This statement calls the method meth of the automation object ole. The automation object must have been created using the special statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for automation objects. The name of the method has to be specified in a character-like data object meth.

The return value of the external method meth can be stored in a data object rc. This data object expects, in accordance with the called method, a character-like data type of length 8 or a data type of type ole2\_object from the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") OLE2 to be able to accept the addressed object.

Addition 1

... EXPORTING p1 = f1 p2 = f2 ...

Effect

The addition EXPORTING can be used to assign actual parameters f1 f2 ... to the input parameters p1 p2 ... of the automation method. The data type of the data objects f1 f2 ... depends on the requirements of the automation method.

Addition 2

... NO FLUSH

Addition 3

... QUEUE-ONLY

Effect

The additions NO FLUSH and QUEUE-ONLY are described in the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)).

System Fields

sy-subrc

Meaning

0

Method meth executed successfully.

1

Error in communication with SAP GUI.

2

Error when calling the method meth.

3

Error when setting an attribute.

4

Error when reading an attribute.

Example

Depending on the selection on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), this source code can be used to open the Excel file Table.xls in directory C:\\temp, start the application Word, and then close both applications again. The automation methods used are listed in the following table.

Application

Method

Parameter

Function

Excel

Open

File name and path

Open

Excel

Quit

\-

Exit

Word

AppShow

\-

Start

Word

AppClose

\-

Exit

TABLES sscrfields.
DATA: excel TYPE ole2\_object,
      word  TYPE ole2\_object,
      book  TYPE ole2\_object,
      rc    TYPE c LENGTH 8.
SELECTION-SCREEN:
  BEGIN OF SCREEN 100 AS WINDOW TITLE title,
    BEGIN OF LINE,
      PUSHBUTTON  2(12) button\_1
                  USER-COMMAND word\_start,
      PUSHBUTTON  20(12) button\_2
                  USER-COMMAND excel\_start,
    END OF LINE,
    BEGIN OF LINE,
      PUSHBUTTON  2(12) button\_3
                  USER-COMMAND word\_stop,
      PUSHBUTTON  20(12) button\_4
                  USER-COMMAND excel\_stop,
    END OF LINE,
  END OF SCREEN 100.
START-OF-SELECTION.
  button\_1 = 'Start Word'.
  button\_2 = 'Start Excel'.
  button\_3 = 'Stop  Word'.
  button\_4 = 'Stop  Excel'.
  CALL SELECTION-SCREEN 100 STARTING AT 10 10.
AT SELECTION-SCREEN.
  CASE sscrfields-ucomm.
    WHEN 'WORD\_START'.
      CHECK word-handle <> -1.
      CHECK word-header = space.
      CREATE OBJECT   word  'Word.Basic'.
      CALL METHOD  OF word  'AppShow'.
    WHEN 'EXCEL\_START'.
      CHECK excel-handle = 0.
      CHECK excel-header = space.
      CREATE OBJECT   excel 'Excel.Application'.
      SET PROPERTY OF excel 'Visible' = 1.
      GET PROPERTY OF excel 'Workbooks' = book.
      CALL METHOD  OF book  'Open' = rc
        EXPORTING #1 = 'C:\\temp\\Table.xls'.
    WHEN 'WORD\_STOP'.
      CALL METHOD OF word 'AppClose'.
      FREE OBJECT word.
      CLEAR: word-handle, word-header.
    WHEN 'EXCEL\_STOP'.
      CALL METHOD OF  excel 'Quit'.
      FREE OBJECT excel.
      CLEAR: excel-handle, excel-header.
    WHEN OTHERS.
      LEAVE PROGRAM.
  ENDCASE.



**📖 Source**: [abapcall_method_ole2.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_method_ole2.htm)

### abapget_property.htm

> **📖 Official SAP Documentation**: [abapget_property.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_property.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

GET PROPERTY - OLE

[Quick Reference](javascript:call_link\('abapget_property_shortref.htm'\))

Syntax

GET PROPERTY OF ole attr = dobj *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Extras:

[1\. ... NO FLUSH](#!ABAP_ADDITION_1@1@)
[2\. ... QUEUE-ONLY](#!ABAP_ADDITION_2@2@)
[3\. ... EXPORTING p1 = f1 p2 = f2 ...](#!ABAP_ADDITION_3@3@)

Effect

Assigns the content of the attribute attr of an automation object ole to the data object dobj. The automation object must have been created using the special statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for automation objects. For the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of ole, the description of the statement CREATE OBJECT applies. The typing of the data object dobj depends on the properties of the automation attribute attr.

System Fields

sy-subrc

Meaning

0

Object attributes passed successfully.

1

Error in communication with SAP GUI.

2

Error in function call in SAP GUI.

3

Error when setting an attribute.

4

Error when reading an attribute.

Addition 1

... NO FLUSH

Addition 2

... QUEUE-ONLY

Effect

For the description of the NO FLUSH and QUEUE-ONLY additions, refer to the description of the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)).

Addition 3

... EXPORTING p1 = f1 p2 = f2 ...

Effect

The addition EXPORTING can be assigned to the parameters p1 p2 ... of the actual parameters f1 f2 ... of the attribute, where the data type of the data objects f1 f2 ... depends on the requirements of the attribute.

Example

This example reads the attribute "Visible" of an Excel table created at runtime. This attribute specifies whether the table processing is visible or runs in the background. The variable vis is typed as an integer, because Excel passes an integer value.

DATA: vis TYPE i,
      app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application'.
GET PROPERTY OF app 'Visible' = vis.



**📖 Source**: [abapget_property.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_property.htm)

### abapset_property.htm

> **📖 Official SAP Documentation**: [abapset_property.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_property.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

SET PROPERTY - OLE

[Quick Reference](javascript:call_link\('abapset_property_shortref.htm'\))

Syntax

SET PROPERTY OF ole attr = dobj *\[*NO FLUSH*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Extras:

[1\. ... NO FLUSH](#!ABAP_ADDITION_1@1@)
[2\. ... EXPORTING p1 = f1 p2 = f2 ...](#!ABAP_ADDITION_2@2@)

Effect

The attribute attr of an automation object ole is set in accordance with the content of the data object dobj. The automation object must have been created using the special statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for automation objects. For the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of ole, the description of the statement CREATE OBJECT applies. The typing of the data object dobj depends on the properties of the automation attribute attr.

System Fields

sy-subrc

Meaning

0

Object attributes passed successfully.

1

Error in communication with SAP GUI.

2

Error in function call in SAP GUI.

3

Error when setting an attribute.

4

Error when reading an attribute.

Addition 1

... NO FLUSH

Effect

The meaning of the addition NO FLUSH is included in the description of the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)).

Addition 2

... EXPORTING p1 = f1 p2 = f2 ...

Effect

The addition EXPORTING can be assigned to the parameters p1 p2 ... of the actual parameters f1 f2 ... of the attribute, where the data type of the data objects f1 f2 ... depends on the requirements of the attribute.

Example

Calls the Office application Excel and displays an empty Excel table by assigning the value 1 to the attribute "Visible".

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application'.
SET PROPERTY OF app 'Visible' = 1.



**📖 Source**: [abapset_property.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_property.htm)

### abapfree_object.htm

> **📖 Official SAP Documentation**: [abapfree_object.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_object.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapfree_object.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfree_object.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

FREE OBJECT - OLE

[Quick Reference](javascript:call_link\('abapfree_object_shortref.htm'\))

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Addition:

[... NO FLUSH](#!ABAP_ONE_ADD@1@)

Effect

This statement releases the memory occupied by the object ole on the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"). The automation object must have been created using the special statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for automation objects. After the release, the object is still available on the current automation server, but can no longer be processed in the ABAP program. For the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of ole, the description of the statement CREATE OBJECT applies.

When the statement FREE OBJECT is passed to the presentation layer, the entire automation queue collected using the addition NO FLUSH is passed.

System Fields

sy-subrc

Meaning

0

Memory released successfully.

1

Error in communication with SAP GUI.

2

Error in function call in SAP GUI.

Note

An automation object ole created using CREATE OBJECT must also be released using FREE OBJECT to avoid memory bottlenecks and terminations of the application.

Addition

... NO FLUSH

Effect

The meaning of the addition NO FLUSH is included in the description of the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)).

Example

Releases an Excel object.

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application' NO FLUSH.
...
FREE OBJECT app NO FLUSH.
