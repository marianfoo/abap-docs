  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

GET PROPERTY, OLE

[Short Reference](javascript:call_link\('abapget_property_shortref.htm'\))

Syntax

GET PROPERTY OF ole attr = dobj *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Additions:

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
CREATE OBJECT   app 'Excel.Application'.
GET PROPERTY OF app 'Visible' = vis.