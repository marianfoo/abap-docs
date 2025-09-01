  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [READ ENTITY, ENTITIES](javascript:call_link\('abapread_entity_entities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20ENTITY%2C%20ENTITIES%2C%20operations%2C%20ABAPREAD_ENTITY_ENTITIES_OP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

READ ENTITY, ENTITIES, operations

Syntax

... *\[*[field\_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\)) [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\))*\]*
    *\[*BY \\\_assoc [field\_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\)) *{* *{* [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\))*}* *|* *{*LINK link\_tab*}* *}*
                           *|* *{*[RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\)) LINK link\_tab*}* *\]*
    *\[*EXECUTE function [field\_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\)) *\[*REQUEST request*\]* [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\)) *\]* ...

Variants:

[1\. ... field\_spec RESULT result\_tab ...](#!ABAP_VARIANT_1@1@)
[2\. ... BY \\\_assoc field\_spec RESULT result\_tab LINK link ...](#!ABAP_VARIANT_2@2@)
[3\. ... EXECUTE function field\_spec *\[*REQUEST request*\]* RESULT result\_tab ...](#!ABAP_VARIANT_3@3@)

Effect

The ABAP EML READ statement includes three kinds of operations:

-   [Read operations](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry"): Read entities directly via key fields.
-   [Read-by-association operations](javascript:call_link\('abenrap_rba_operation_glosry.htm'\) "Glossary Entry"): Read [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") via key fields of the [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry"). It is also possible to read parent entities via the child entities, however, only from within the implementation class.
-   Execute functions: Carry out a user-defined read operation, for example, if parameters are required.

All read operations require an internal table ([field\_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\))) as input parameter to specify, for example, whether all fields or only a specific set of fields should be read from RAP BO entities. Read operations always have a result, which is stored in an internal table ([result\_tab](javascript:call_link\('abapeml_result.htm'\))). Note that read-by-association operations must either have a read result or return the associated keys. They can also return both.

Hints

-   After the keyword BY for read-by-association operations, it is required to insert the backslash (\\) before the associations are displayed via the code completion.
-   In case of read-by-association operations, the explicit specification of the [full\_rba](abaphandler_meth_read.htm#!ABAP_VARIANT_2@2@) parameter is only possible for the dynamic form of the ABAP EML READ statement ([READ ENTITIES OPERATIONS](javascript:call_link\('abapread_entities_operations.htm'\))). With the short form ([READ ENTITY](javascript:call_link\('abapread_entity_short.htm'\))) and long form ([READ ENTITIES](javascript:call_link\('abapread_entities_long.htm'\))), the explicit specification of the [full\_rba](abaphandler_meth_read.htm#!ABAP_VARIANT_2@2@) parameter is not possible. In these cases, the specification is irrelevant because it is anyway specified if the links ([link\_rba](abaphandler_meth_read.htm#!ABAP_VARIANT_2@2@) parameter) or the data are requested.

Further Information

See further information and rules for using ABAP EML statements in implementations of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") and [consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") in the Development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

Variant 1   

... field\_spec RESULT result\_tab ...

Effect

Used to read directly from a RAP BO entity, either a [root](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") or [child entity](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry"), with input parameters specified in [field\_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\)).

The keyword RESULT is the only additional mandatory keyword. The internal table result\_tab is used to store the result of the read operation. It must be typed with a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that depends on the read operation variant. See more details in the documentation for [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\)).

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ\_OPRTNS demonstrates a READ operation directly from a RAP BO entity.

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
  RESULT FINAL(read\_from)
  FAILED FINAL(read\_failed).

Variant 2   

... BY \\\_assoc field\_spec RESULT result\_tab LINK link\_tab ...

Addition:

[... LINK link\_tab](#!ABAP_ONE_ADD@1@)

Effect

Used for read-by-association operations, that is, to read [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") of associated entities via the keys of the [parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry"). This includes associated [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") that are part of the composition tree but also cross-BO entities that are not part of it. It is also possible to read parent entities via the child entities, however, only from within the implementation class. \_assoc is the name of the association as specified in the underlying CDS view. As a prerequisite, child entities to be read from must be defined in the same BDEF. For read access to a cross-BO entity, it is a prerequisite that behavior is defined for it in another BDEF.

[field \_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\)) is an internal table specifying the input parameters for the read-by-association operation. The internal table [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\)) is used to store the result of the read operation. It must be typed with a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that depends on the read operation variant. The component [%target](javascript:call_link\('abapderived_types_comp.htm'\)) must be filled in the in the internal table field\_spec.

Addition   

... LINK link\_tab

Effect

The statement provides an additional target variable (link\_tab) after the LINK keyword. link\_tab is an internal table containing keys of the source (i. e. the parent, or the child respectively if instances are read from the parent via the child) and keys of the target (associated entity) as nested structures. link\_tab must be typed with the BDEF derived type [TYPE TABLE FOR READ LINK](javascript:call_link\('abaptype_table_for.htm'\)).

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ\_OPRTNS demonstrates a read-by-association operation.

READ ENTITY demo\_spfli\_flights
BY \\\_Flights
ALL FIELDS WITH VALUE #( ( %key-Carrid = 'AA'
                            %key-Connid = 26 ) )
RESULT FINAL(rba\_all\_fields\_with)
FAILED FINAL(read4\_failed).

Variant 3   

... EXECUTE function field\_spec *\[*REQUEST request*\]* RESULT result\_tab ...

Addition:

[... REQUEST request](#!ABAP_ONE_ADD@2@)

Effect

The keyword EXECUTE triggers a function for a read-only operation. In both managed and unmanaged scenarios, the function must be user-implemented in a [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

[field \_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\)) is an internal table specifying the input parameters for the operation. The internal table result\_tab is used to store the result of the read operation. It must be typed with a BDEF derived type that depends on the read operation variant. See more details in the documentation for [RESULT result\_tab](javascript:call_link\('abapeml_result.htm'\)).

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ\_OP\_FUNC demonstrates a read operation executing a function.

READ ENTITIES OF demo\_spfli\_flights
ENTITY demo\_spfli\_flights
  EXECUTE FunctionResultEntity
  FROM VALUE #( ( %tky-Carrid =  'AA'
                  %tky-Connid = 17 ) )
RESULT FINAL(result)
FAILED FINAL(failed)
REPORTED FINAL(reported).

Addition   

... REQUEST request

Effect

Used to specify whether the result should be returned completely or only parts of it (for example, only the keys) for the purpose of improving performance. request must be typed with the required [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"): TYPE STRUCTURE FOR FUNCTION REQUEST. The components of the structure are all key and data fields of the RAP BO entity. They are of type ABP\_BEHV\_FLAG and can be flagged whether to include the respective fields or not.

It is optional and can only be used for functions specified in the BDEF with the addition [result selective](javascript:call_link\('abenbdl_action_output_para.htm'\)).

Executable Example

-   The example [READ: Operations and Field Selection](javascript:call_link\('abeneml_read_op_fields_abexa.htm'\)) demonstrates several different variants of field selection with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples_abexas.htm'\)).

Continue
[READ ENTITY, ENTITIES, field\_spec](javascript:call_link\('abapread_entity_entities_fields.htm'\))