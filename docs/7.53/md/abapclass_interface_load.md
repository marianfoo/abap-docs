  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_declarations.htm) →  [Declaration and Loading](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenaddress_obsolet.htm) → 

CLASS, INTERFACE - LOAD

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_deferred_load_shortref.htm)

Obsolete Syntax

CLASS class DEFINITION LOAD.
INTERFACE intf LOAD.

Effect

The variants of the statements [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterface.htm) with the addition LOAD are obsolete. ABAP Compiler ignores these statements.

Previously, these statements were only required if the compilation of an ABAP program failed to contain recursive access to a global class or a global interface. These types of recursions are now avoided and a class or an interface is loaded automatically when a component is first accessed.

Note

These variants of the statements CLASS and INTERFACE can also be used in contexts other than the context described in [CLASS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass.htm) and [INTERFACE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinterface.htm).