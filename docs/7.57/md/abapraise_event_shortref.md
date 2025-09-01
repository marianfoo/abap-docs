  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  R

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RAISE EVENT, ABAPRAISE_EVENT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

RAISE EVENT - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_event.htm)

Syntax

RAISE EVENT evt *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*.

Effect

Raises an event in a method.

Addition  

-   EXPORTING p1 = a1 p2 = a2 ...
    Passes actual parameters a1, a2, ... to the input parameter p1, p2 of the [event handler](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenevent_handler_glosry.htm "Glossary Entry").