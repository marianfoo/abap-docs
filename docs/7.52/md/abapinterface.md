  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclasses_and_interfaces.htm) → 

INTERFACE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_shortref.htm)

Syntax Forms

[Declaration of Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_definition.htm)
1\. INTERFACE intf *\[*PUBLIC*\]*.
    *\[*[components](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninterface_component.htm)*\]*
  ENDINTERFACE.
[Deferred Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_deferred.htm)
2\. INTERFACE intf DEFERRED *\[*PUBLIC*\]*.

Effect

The statement INTERFACE defines interfaces or defers them.

-   The definition of an interface consists of a [declaration section](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_definition.htm) that starts with INTERFACE and is ended using ENDINTERFACE. Unlike classes, an interface does not have an implementation section.
    
-   Additional variants of INTERFACE without ENDINTERFACE are used for [deferring interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_deferred.htm) in a program.
    

The statements INTERFACE and associated statements ENDINTERFACE can be specified only in the global context of a program. INTERFACE and ENDINTERFACE cannot be specified within classes, procedures, and processing blocks implemented internally as a procedure (namely event blocks for [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) and [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm)). This applies in particular to the variant of INTERFACE specified here, which is not closed using ENDINTERFACE.

Notes

-   The definition or deferral of an interface is handled like other declaration statements (DATA, TYPE, ...). In a processing block without a local context, they are handled like global program declarations and do not end the processing block.
    
-   The obsolete variant [INTERFACE ... LOAD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_interface_load.htm) was used to load interfaces explicitly.
    

Continue
[INTERFACE intf](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_definition.htm)
[ENDINTERFACE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendinterface.htm)
[INTERFACE - DEFERRED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinterface_deferred.htm)