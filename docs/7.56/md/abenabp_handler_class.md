  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm) → 

RAP Handler Class

Syntax

[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm) lcl\_handler [DEFINITION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm)
  [INHERITING FROM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) CL\_ABAP\_BEHAVIOR\_HANDLER *\[* [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]* *\[*[FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm)*\]*.
  [PRIVATE SECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprivate.htm).
    [handler\_method\_definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm)
    ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_definition.htm).
[CLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm) lcl\_handler [IMPLEMENTATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm)
  [handler\_method\_implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm)
[ENDCLASS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_implementation.htm).

Effect

A handler class can be defined in the [CCIMP include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenccimp_glosry.htm "Glossary Entry") of an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). It consists of definitions [handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") definitions [handler\_method\_definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm) and implementations [handler\_method\_implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm).

A handler class lcl\_handler inherits from class CL\_ABAP\_BEHAVIOR\_HANDLER. For modularization purposes, one behavior pool can define several handler classes. For example, each entity can have its own handler class, or individual handler classes can be defined to distinguish between reading and changing RAP BO entities.

Handler classes are implicitly [ABSTRACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) and [FINAL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) since instantiating and calling only happens through the [RAP runtime engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry").

Executable Example

The example [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_handler_methods_abexa.htm) demonstrates RAP handler methods within a RAP handler class using a simple unmanaged RAP BO that is draft-enabled.

Continue
[METHODS, FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmethods_for_rap_behv.htm)