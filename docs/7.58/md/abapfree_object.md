---
title: "FREE OBJECT, OLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_object_shortref.htm) Syntax FREE OBJECT ole NO FLUSH. Addition: ... NO FLUSH(#!ABAP_ONE_ADD@1@) Effect This statement releases the memory occupied by the object ole on the current AS instance(https://he
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_object.htm"
abapFile: "abapfree_object.htm"
keywords: ["do", "if", "try", "data", "abapfree", "object"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and OLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenole2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FREE%20OBJECT%2C%20OLE%2C%20ABAPFREE_OBJECT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FREE OBJECT, OLE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfree_object_shortref.htm)

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Addition:

[... NO FLUSH](#!ABAP_ONE_ADD@1@)

Effect

This statement releases the memory occupied by the object ole on the current [AS instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenas_instance_glosry.htm "Glossary Entry"). The automation object must have been created using the special statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_ole2.htm) for automation objects. After the release, the object remains on the current automation server, but can no longer be processed in the ABAP program. The description of the statement CREATE OBJECT applies to the [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry") of ole.

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

Hint

An automation object ole created using CREATE OBJECT must also be released using FREE OBJECT to avoid memory bottlenecks and terminations of the application.

Addition   

... NO FLUSH

Effect

The meaning of the addition NO FLUSH is included in the description of the statement [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_ole2.htm).

Example

Release of an Excel object.

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application' NO FLUSH.
...
FREE OBJECT app NO FLUSH.