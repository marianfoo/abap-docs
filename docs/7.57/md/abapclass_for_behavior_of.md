  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CLASS, FOR BEHAVIOR OF, ABAPCLASS_FOR_BEHAVIOR_OF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

CLASS, FOR BEHAVIOR OF

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_shortref.htm)

Syntax

[CLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm) class [DEFINITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm)
            [PUBLIC *\[*ABSTRACT*\]* *\[*FINAL*\]*](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm)
            FOR BEHAVIOR OF bdef.
  ...
[ENDCLASS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_definition.htm).

Effect

The addition FOR BEHAVIOR OF to the definition of a [global class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenglobal_class_glosry.htm "Glossary Entry") defines an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") for the [CDS behavior definition (BDEF)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") specified in bdef. The name of the global class (class) of an ABAP behavior pool usually starts with the prefix BP\_. The global class is implicitly [ABSTRACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm) and [FINAL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_options.htm); hence, ABSTRACT and FINAL can but need not be specified. It can have static methods, [CLASS-DATA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass-data.htm), [CONSTANTS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconstants.htm) and [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm).

If a BDEF defines operations with self-defined logic, such as [nonstandard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard.htm), [determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm) or [validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm), an implementation of those operations is required in one or more behavior pools. Any number of behavior pools can be assigned to a BDEF allowing applications a structuring into multiple units (see the topic [CDS BDL - implementation grouping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_grouping.htm)).

The actual implementation of the transactional behavior of RAP BOs happens in the [CCIMP include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenccimp_glosry.htm "Glossary Entry") of a behavior pool. There, two types of special [local classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocal_class_glosry.htm "Glossary Entry") can be defined: one or more [handler classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm) to implement the [RAP interaction phase](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_int_phase_glosry.htm "Glossary Entry") and a [saver class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm) to implement the [RAP save sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") of the business object behavior.

Hints

-   Currently, global classes of behavior pools cannot be instantiated or inherited.
-   ABPs can be unit tested with class CL\_ABAP\_BEHV\_TEST.

Further Information

Make sure that you fulfill the [RAP Business Object Contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_bo_contract.htm).

Example

The following source code section taken from the global class BP\_DEMO\_MANAGED\_ADDITIONAL\_SAV shows a class definition.

   CLASS bp\_demo\_managed\_additional\_sav DEFINITION PUBLIC
    ABSTRACT FINAL FOR BEHAVIOR OF demo\_managed\_additional\_save.
   PUBLIC SECTION.
    CLASS-DATA: var\_req\_c TYPE REQUEST
                    FOR CHANGE demo\_managed\_additional\_save,
                var\_req\_d TYPE REQUEST
                    FOR DELETE demo\_managed\_additional\_save,
                var\_tab\_c TYPE TABLE
                    FOR CHANGE demo\_managed\_additional\_save,
                var\_struc\_c TYPE STRUCTURE
                    FOR CHANGE demo\_managed\_additional\_save.
    ...
   ENDCLASS.
   CLASS bp\_demo\_managed\_additional\_sav IMPLEMENTATION.
     ...
   ENDCLASS.