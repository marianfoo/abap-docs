  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm) → 

READ ENTITY, ENTITIES, operations

Syntax

... *\[*[field\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm) [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm)*\]*
    *\[*BY \\\_assoc [field\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm) [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm) *\[*LINK link\_tab*\]**\]*
    *\[*EXECUTE function [field\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm) *\[*REQUEST request*\]* [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm) *\]* ...

Variants:

[1\. ... field\_spec RESULT result\_tab ...](#!ABAP_VARIANT_1@1@)
[2\. ... BY \\\_assoc field\_spec RESULT result\_tab LINK link ...](#!ABAP_VARIANT_2@2@)
[3\. ... EXECUTE function field\_spec *\[*REQUEST request*\]* RESULT result\_tab ...](#!ABAP_VARIANT_3@3@)

Effect

The ABAP EML READ statement includes three kinds of operations:

-   [Read operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_read_operation_glosry.htm "Glossary Entry"): Read entities directly via key fields.
-   [Read-by-association operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry"): Read [child entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry") via key fields of the [parent entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparent_entity_glosry.htm "Glossary Entry"). It is also possible to read parent entities via the child entities, however, only from within the implementation class.
-   Execute functions: Carry out a self-defined read operation, for example, if parameters are required.

All read operations require an internal table ( [field\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm)) as input parameter to specify, for example, whether all fields or only a specific set of fields should be read from RAP BO entities. Read operations always have a result, which is stored in an internal table ([result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm)).

Hints

-   After the keyword BY for read-by-association operations, it is required to insert the backslash (\\) before the associations are displayed via the code completion.
-   In case of read-by-association operations, the explicit specification of the [full\_rba](abaphandler_meth_read.htm#!ABAP_VARIANT_2@2@) parameter is only possible for the dynamic form of the ABAP EML READ statement ([READ ENTITIES OPERATIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_operations.htm)). With the short form ([READ ENTITY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_short.htm)) and long form ([READ ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entities_long.htm)), the explicit specification of the [full\_rba](abaphandler_meth_read.htm#!ABAP_VARIANT_2@2@) parameter is not possible. In these cases, the specification is irrelevant because it is anyway specified if the links ([link\_rba](abaphandler_meth_read.htm#!ABAP_VARIANT_2@2@) parameter) or the data are requested.

Variant 1   

... field\_spec RESULT result\_tab ...

Effect

Used to read directly from a RAP BO entity, either a [root](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry") or [child entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry"), with input parameters specified in [field\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm).

The keyword RESULT is the only additional mandatory keyword. The internal table result\_tab is used to store the result of the read operation. It must be typed with a [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") that depends on the read operation variant. See more details in the documentation for [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm).

Example

The following source code section taken from DEMO\_RAP\_EML\_READ\_OPERATIONS demonstrates a READ operation directly from a RAP BO entity.

READ ENTITY demo\_spfli\_flights
FROM VALUE #(
    ( %key-Carrid = 'AZ' %key-Connid = 790
      %control = VALUE #( Airpfrom  = if\_abap\_behv=>mk-on
                          Airpto    = if\_abap\_behv=>mk-on
                          Cityfrom  = if\_abap\_behv=>mk-on
                          Cityto    = if\_abap\_behv=>mk-on
                          Countryfr = if\_abap\_behv=>mk-on
                          Countryto = if\_abap\_behv=>mk-on
                          Deptime   = if\_abap\_behv=>mk-on
                          Arrtime   = if\_abap\_behv=>mk-on
                          Distance  = if\_abap\_behv=>mk-on
                          Fltime    = if\_abap\_behv=>mk-on
                                        ) ) )
  RESULT DATA(read\_from)
  FAILED DATA(read\_failed).

Variant 2   

... BY \\\_assoc field\_spec RESULT result\_tab LINK link\_tab ...

Addition:

[... LINK link\_tab](#!ABAP_ONE_ADD@1@)

Effect

Used for read-by-association operations, that is, to read [RAP BO instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") of associated entities via the keys of the [parent entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparent_entity_glosry.htm "Glossary Entry"). This includes associated [child entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry") that are part of the composition tree but also cross-BO entities that are not part of it. It is also possible to read parent entities via the child entities, however, only from within the implementation class. \_assoc is the name of the association as specified in the underlying CDS view. As a prerequisite, child entities to be read from must be defined in the same BDEF. For read access to a cross-BO entity, it is a prerequisite that behavior is defined for it in another BDEF.

[field \_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm) is an internal table specifying the input parameters for the read-by-association operation. The internal table [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm) is used to store the result of the read operation. It must be typed with a [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") that depends on the read operation variant. The component [%target](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapderived_types_comp.htm) must be filled in the in the internal table field\_spec.

Addition   

... LINK link\_tab

Effect

The statement provides an additional target variable (link\_tab) after the LINK keyword. link\_tab is an internal table containing keys of the source (i. e. the parent, or the child respectively if instances are read from the parent via the child) and keys of the target (associated entity) as nested structures. link\_tab must be typed with the BDEF derived type [TYPE TABLE FOR READ LINK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_table_for.htm).

Example

The following source code section taken from DEMO\_RAP\_EML\_READ\_OPERATIONS demonstrates a read-by-association operation.

READ ENTITY demo\_spfli\_flights
BY \\\_Flights
ALL FIELDS WITH VALUE #( ( %key-Carrid = 'AA'
                            %key-Connid = 26 ) )
RESULT DATA(rba\_all\_fields\_with)
FAILED DATA(read4\_failed).

Variant 3   

... EXECUTE function field\_spec *\[*REQUEST request*\]* RESULT result\_tab ...

Addition:

[... REQUEST request](#!ABAP_ONE_ADD@2@)

Effect

The keyword EXECUTE triggers a function for a read-only operation. In both managed and unmanaged scenarios, the function must be self-implemented in a [behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

[field \_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm) is an internal table specifying the input parameters for the operation. The internal table result\_tab is used to store the result of the read operation. It must be typed with a BDEF derived type that depends on the read operation variant. See more details in the documentation for [RESULT result\_tab](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_result.htm).

Example

The following source code section taken from DEMO\_RAP\_EML\_READ\_OP\_FUNC demonstrates a read operation executing a function.

READ ENTITIES OF demo\_spfli\_flights
ENTITY demo\_spfli\_flights
  EXECUTE FunctionResultEntity
  FROM VALUE #( ( %tky-Carrid =  'AA'
                  %tky-Connid = 17 ) )
RESULT DATA(result)
FAILED DATA(failed)
REPORTED DATA(reported).

Addition   

... REQUEST request

Effect

Used to specify whether the result should be returned completely or only parts of it (for example, only the keys) for the purpose of improving performance. request must be typed with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"): TYPE STRUCTURE FOR FUNCTION REQUEST. The components of the structure are all key and data fields of the RAP BO entity. They are of type ABP\_BEHV\_FLAG and can be flagged whether to include the respective fields or not.

It is optional and can only be used for functions specified in the BDEF with the addition [result selective](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_output_para.htm).

Executable Example

-   The example [READ: Operations and Field Selection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_read_op_fields_abexa.htm) demonstrates several different variants of field selection with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_read_examples.htm).

Continue
[READ ENTITY, ENTITIES, field\_spec](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_fields.htm)