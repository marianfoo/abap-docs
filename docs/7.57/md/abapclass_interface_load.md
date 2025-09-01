  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaddress_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS, INTERFACE, LOAD, ABAPCLASS_INTERFACE_LOAD, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

CLASS, INTERFACE, LOAD

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_deferred_load_shortref.htm)

Obsolete Syntax

CLASS class DEFINITION LOAD.
INTERFACE intf LOAD.

Effect

The variants of the statements [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface.htm) with the addition LOAD are obsolete. The ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed because it contained recursive access to a global class or a global interface. These types of recursions are now avoided and a class or an interface is loaded automatically when a component is first accessed.

Hint

These variants of the statements CLASS and INTERFACE can also be specified in contexts other than the context described in [CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface.htm).