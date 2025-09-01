  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenaddress_obsolet.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CLASS%2C%20INTERFACE%2C%20LOAD%2C%20ABAPCLASS_INTERFACE_LOAD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CLASS, INTERFACE, LOAD

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass_deferred_load_shortref.htm)

Obsolete Syntax

CLASS class DEFINITION LOAD.
INTERFACE intf LOAD.

Effect

The variants of the statements [CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterface.htm) with the addition LOAD are obsolete. The ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed because it contained recursive access to a global class or a global interface. These types of recursions are now avoided and a class or an interface is loaded automatically when a component is first accessed.

Hint

These variants of the statements CLASS and INTERFACE can also be specified in contexts other than the context described in [CLASS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinterface.htm).