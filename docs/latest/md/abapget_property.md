---
title: "GET PROPERTY, OLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_property_shortref.htm) Syntax GET PROPERTY OF ole prop = dobj NO FLUSH QUEUE-ONLY EXPORTING p1 = f1 p2 = f2 .... Additions: 1. ... NO FLUSH(#!ABAP_ADDITION_1@1@) 2. ... QUEUE-ONLY(
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_property.htm"
abapFile: "abapget_property.htm"
keywords: ["do", "if", "try", "data", "abapget", "property"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and OLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenole2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20PROPERTY%2C%20OLE%2C%20ABAPGET_PROPERTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET PROPERTY, OLE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_property_shortref.htm)

Syntax

GET PROPERTY OF ole prop = dobj *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*
                                *\[*EXPORTING p1 = f1 p2 = f2 ...*\]*.

Additions:

[1\. ... NO FLUSH](#!ABAP_ADDITION_1@1@)
[2\. ... QUEUE-ONLY](#!ABAP_ADDITION_2@2@)
[3\. ... EXPORTING p1 = f1 p2 = f2 ...](#!ABAP_ADDITION_3@3@)

Effect

Assigns the content of the property prop of an automation object ole to the data object dobj. The automation object must have been created using the special statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object_ole2.htm) for automation objects. The description of the statement CREATE OBJECT applies to the [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_glosry.htm "Glossary Entry") of ole. The typing of the data object dobj depends on the properties of the automation property prop.

System Fields

sy-subrc

Meaning

0

Object properties passed successfully.

1

Error in communication with SAP GUI.

2

Error in function call in SAP GUI.

3

Error when setting a property.

4

Error when reading a property.

Addition 1   

... NO FLUSH

Addition 2   

... QUEUE-ONLY

Effect

The description of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcreate_object_ole2.htm) applies to the meaning of the NO FLUSH and QUEUE-ONLY additions.

Addition 3   

... EXPORTING p1 = f1 p2 = f2 ...

Effect

The addition EXPORTING can be used to assign the actual parameters f1 f2 ... to the parameters p1 p2 ... of the automation object, where the data type of the data objects f1 f2 ... depends on the requirements of the property.

Example

This example reads the Visible property of an Excel table that was created at runtime. This property specifies whether the table processing is visible or runs in the background. The variable vis is typed as an integer because Excel passes an integer value.

DATA: vis TYPE i,
      app TYPE ole2\_object.
CREATE OBJECT   app 'Excel.Application'.
GET PROPERTY OF app 'Visible' = vis.