  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and OLE](javascript:call_link\('abenole2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FREE OBJECT, OLE, ABAPFREE_OBJECT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion for improvement:)

FREE OBJECT, OLE

[Short Reference](javascript:call_link\('abapfree_object_shortref.htm'\))

Syntax

FREE OBJECT ole *\[*NO FLUSH*\]*.

Addition:

[... NO FLUSH](#!ABAP_ONE_ADD@1@)

Effect

This statement releases the memory occupied by the object ole on the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). The automation object must have been created using the special statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)) for automation objects. After the release, the object remains on the current automation server, but can no longer be processed in the ABAP program. The description of the statement CREATE OBJECT applies to the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of ole.

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

The meaning of the addition NO FLUSH is included in the description of the statement [CREATE OBJECT](javascript:call_link\('abapcreate_object_ole2.htm'\)).

Example

Release of an Excel object.

DATA app TYPE ole2\_object.
CREATE OBJECT app 'Excel.Application' NO FLUSH.
...
FREE OBJECT app NO FLUSH.