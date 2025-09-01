  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_declarations.htm) →  [Classes and Interfaces (ABAP Objects)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclasses_and_interfaces.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: INTERFACE, ABAPINTERFACE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

INTERFACE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_shortref.htm)

Syntax Forms

[Declaration of Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_definition.htm)
1\. INTERFACE intf *\[*PUBLIC*\]*.
    *\[*[components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_component.htm)*\]*
  ENDINTERFACE.
[Deferred Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_deferred.htm)
2\. INTERFACE intf DEFERRED *\[*PUBLIC*\]*.

Effect

The statement INTERFACE defines [interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoo_intf_glosry.htm "Glossary Entry") in ABAP Objects or defers their declaration.

-   The definition of an interface consists of a [declaration section](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_definition.htm) that starts with INTERFACE and is closed using ENDINTERFACE. Unlike classes, an interface does not have an implementation part.
-   The variant of INTERFACE without ENDINTERFACE is used for [deferring interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_deferred.htm) in a program.

The statements INTERFACE and associated statements ENDINTERFACE can only be specified in the global context of a program. INTERFACE and ENDINTERFACE cannot be specified within classes, procedures, and processing blocks implemented internally as a procedure, that is, event blocks for [GET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget-.htm) and [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_selection-screen.htm)). This applies in particular to the variant of INTERFACE specified here, which is not closed using ENDINTERFACE.

Hints

-   The definition or deferral of an interface is handled like other declaration statements (DATA, TYPE, ...). In a processing block without a local context, they are handled like global program declarations and do not close the processing block.
-   Previously, an obsolete variant [INTERFACE ... LOAD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_interface_load.htm) was used to load interfaces explicitly.

Continue
[INTERFACE intf](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_definition.htm)
[ENDINTERFACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendinterface.htm)
[INTERFACE, DEFERRED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinterface_deferred.htm)