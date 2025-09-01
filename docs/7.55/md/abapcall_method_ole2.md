  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

CALL METHOD, OLE

[Short Reference](javascript:call_link\('abapcall_method_of_ole_shortref.htm'\))

Syntax

CALL METHOD OF ole meth *\[*\= rc*\]*
               *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*
               *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Additions:

[1.... EXPORTING p1 = f1 p2 = f2 ...](#!ABAP_ADDITION_1@1@)
[2.... NO FLUSH](#!ABAP_ADDITION_2@2@)
[3.... QUEUE-ONLY](#!ABAP_ADDITION_3@3@)

Effect

This statement calls the method meth of the automation object ole. The automation object must have been created using the special statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for automation objects. The name of the method has to be specified in a character-like data object meth.

The return value of the external method meth can be stored in a data object rc. This data object expects, in accordance with the called method, a character-like data type of length 8 or a data type of type ole2\_object from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") OLE2 to be able to accept the addressed object.

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