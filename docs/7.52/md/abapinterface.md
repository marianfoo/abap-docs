  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces](javascript:call_link\('abenclasses_and_interfaces.htm'\)) → 

INTERFACE

[Quick Reference](javascript:call_link\('abapinterface_shortref.htm'\))

Syntax Forms

[Declaration of Interfaces](javascript:call_link\('abapinterface_definition.htm'\))
1\. INTERFACE intf *\[*PUBLIC*\]*.
    *\[*[components](javascript:call_link\('abeninterface_component.htm'\))*\]*
  ENDINTERFACE.
[Deferred Interfaces](javascript:call_link\('abapinterface_deferred.htm'\))
2\. INTERFACE intf DEFERRED *\[*PUBLIC*\]*.

Effect

The statement INTERFACE defines interfaces or defers them.

-   The definition of an interface consists of a [declaration section](javascript:call_link\('abapinterface_definition.htm'\)) that starts with INTERFACE and is ended using ENDINTERFACE. Unlike classes, an interface does not have an implementation section.
    
-   Additional variants of INTERFACE without ENDINTERFACE are used for [deferring interfaces](javascript:call_link\('abapinterface_deferred.htm'\)) in a program.
    

The statements INTERFACE and associated statements ENDINTERFACE can be specified only in the global context of a program. INTERFACE and ENDINTERFACE cannot be specified within classes, procedures, and processing blocks implemented internally as a procedure (namely event blocks for [GET](javascript:call_link\('abapget-.htm'\)) and [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\))). This applies in particular to the variant of INTERFACE specified here, which is not closed using ENDINTERFACE.

Notes

-   The definition or deferral of an interface is handled like other declaration statements (DATA, TYPE, ...). In a processing block without a local context, they are handled like global program declarations and do not end the processing block.
    
-   The obsolete variant [INTERFACE ... LOAD](javascript:call_link\('abapclass_interface_load.htm'\)) was used to load interfaces explicitly.
    

Continue
[INTERFACE intf](javascript:call_link\('abapinterface_definition.htm'\))
[ENDINTERFACE](javascript:call_link\('abapendinterface.htm'\))
[INTERFACE - DEFERRED](javascript:call_link\('abapinterface_deferred.htm'\))