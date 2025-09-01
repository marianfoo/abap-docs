  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm) →  [ABAP and OLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenole2.htm) → 

SET PROPERTY, OLE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_property_shortref.htm)

Syntax

SET PROPERTY OF ole attr = dobj *\[*NO FLUSH*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Additions:

[1\. ... NO FLUSH](#!ABAP_ADDITION_1@1@)
[2\. ... EXPORTING p1 = f1 p2 = f2 ...](#!ABAP_ADDITION_2@2@)

Effect

The attribute attr of an automation object ole is set in accordance with the content of the data object dobj. The automation object must have been created using the special statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_ole2.htm) for automation objects. For the [typing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentyping_glosry.htm "Glossary Entry") of ole, the description of the statement CREATE OBJECT applies. The typing of the data object dobj depends on the properties of the automation attribute attr.

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

The meaning of the addition NO FLUSH is included in the description of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcreate_object_ole2.htm).

Addition 2

... EXPORTING p1 = f1 p2 = f2 ...

Effect

The addition EXPORTING can be assigned to the parameters p1 p2 ... of the actual parameters f1 f2 ... of the attribute, where the data type of the data objects f1 f2 ... depends on the requirements of the attribute.

Example

Calls the Office application Excel and displays an empty Excel table by assigning the value 1 to the attribute "Visible".

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application'.
SET PROPERTY OF app 'Visible' = 1.