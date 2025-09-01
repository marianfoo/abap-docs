# ABAP - Keyword Documentation / ABAP - Rules for Strict ABAP / Working with released APIs

Included pages: 5


### abenrestricted_apis.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_strict_rules.htm) → 

Working with released APIs

In [strict ABAP development environments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstrict_abap_dev_envir_glosry.htm "Glossary Entry"), a [restricted ABAP language version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_version_glosry.htm "Glossary Entry") must be used, where access to [repository objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") is restricted to [released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_api_glosry.htm "Glossary Entry"). The topic [Released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_apis.htm) provides an overview of APIs that are released for the restricted ABAP language versions allowed in a strict development environment.

Changes to released APIs are strictly governed by [release contracts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelease_contract_glosry.htm "Glossary Entry"). These release contracts describe which compatible changes are allowed for a released API from release to release. ABAP developments that access such APIs must be aware of the possibility of such compatible changes and design the access accordingly. The following topics describe the allowed compatible changes and contain rules for accessing such released APIs.

-   [Compatibility Rules for the C1 Contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_compatibility_rules.htm)

Continue
[Compatibility Rules for the C1 Contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_compatibility_rules.htm)


### abenc1_compatibility_rules.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_strict_rules.htm) →  [Working with released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_apis.htm) → 

Compatibility Rules for the C1 Contract

The [C1 contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_contract_glosry.htm "Glossary Entry") is the [release contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is crucial for system-internal access to APIs from other repository objects. It guarantees stable APIs for use within the same [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry"). The following topic list the most important rules that must be obeyed by API providers and API consumers.

-   [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_provider_rules.htm)
-   [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_consumer_rules.htm)

Continue
[C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_provider_rules.htm)
[C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_consumer_rules.htm)


### abenc1_provider_rules.htm

  

* * *

AS ABAP Release 756, ©Copyright 2022 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_strict_rules.htm) →  [Working with released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_apis.htm) →  [Compatibility Rules for the C1 Contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_compatibility_rules.htm) → 

C1 Contract Rules for API Providers

Generally, a repository object that is classified with the C1 contract must not be deleted after being released as an API but can become deprecated.

The following sections show the most important rules that a C1 contract imposes on different kinds of repository objects.

-   [General Rules for Elementary Data Types](#@@ITOC@@ABENC1_PROVIDER_RULES_1)
-   [Dictionary Objects](#@@ITOC@@ABENC1_PROVIDER_RULES_2)
-   [ABAP CDS Objects](#@@ITOC@@ABENC1_PROVIDER_RULES_3)
-   [Objects implemented in ABAP](#@@ITOC@@ABENC1_PROVIDER_RULES_4)

General Rules for Elementary Data Types

Elementary data types can be released as follows:

-   In ABAP Dictionary and ABAP CDS based on [DDIC built-in data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)
    -   Standalone as DDIC domains or data elements
    -   Component types of DDIC structures or database tables
    -   Element types of CDS entities
-   In ABAP language based on [built-in ABAP types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_complete.htm)
    -   Public types of global classes or interfaces
    -   Types of interface parameters of methods, events and function modules

For all these elementary types, the following general rules apply:

-   The built-in data type must not be changed with the following exceptions:
    
    -   [DDIC built-in data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) INT1, INT2 INT4
    -   [built-in ABAP types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_types_complete.htm) b, s, i
    
    Those may be replaced by an integer type with a larger value range.
    
-   The length must not be changed with the following exceptions:
    
    -   DDIC built-in data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP types c and p
    
    The length must not be decreased.
    
-   The number of [decimal places](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendecimal_place_glosry.htm "Glossary Entry") must not be changed with the following exceptions:
    
    -   DDIC built-in data types DEC, CURR, QUAN, DF16\_DEC and DF34\_DEC
    -   Built-in ABAP type p
    
    The number of decimal places must not be decreased.
    

Dictionary Objects

-   [DDIC domains](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendomain_glosry.htm "Glossary Entry")
    
    Changes to domains must follow the general rules for elementary data types listed above. Furthermore, changes to the following [semantic attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_domains_sema.htm) are restricted:
    
    -   The output length must not be decreased.
    -   The conversion routine must not be changed.
    -   The setting for lowercase letters must not be changed.
-   [DDIC data elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_element_glosry.htm "Glossary Entry")
    
    Changes to data elements must follow the general rules for elementary data types listed above.
    
-   [DDIC table types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_table_type_glosry.htm "Glossary Entry")
    -   No changes are allowed.
-   [DDIC structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_structure_glosry.htm "Glossary Entry")
    -   Existing components must not be removed
    -   Type changes are allowed to existing components are allowed for elementary components only and must follow the general rules for elementary data types listed above.
    -   An elementary type of a component must not be changed into a non-elementary type such as reference type, a substructure or a table type and vice versa.
    -   Only positions of non-key fields can be changed.
    -   Non-key fields can be added.
-   [DDIC database tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_db_table_glosry.htm "Glossary Entry")
    
    For DDIC database tables the same rules apply as for DDIC structures.
    
-   [DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_view_glosry.htm "Glossary Entry")
    
    DDIC views cannot be released with a C1 contract.
    

ABAP CDS Objects

-   [CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry")
    -   Only [CDS DDIC-based views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), [CDS view entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), [CDS projection views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") and [CDS abstract entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") can be released with a C1 contract.
    -   The usage of upper and lower case in the name of an entity, its associations, elements or parameters must not be changed.
    -   The client handling must not be changed.
    -   Being a root entity of a RAP BO cannot be undone.
    -   Only annotations can be used that are allowed by the annotation [@CompatibilityContract.rc.usageAllowed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_anno_annos.htm) in their definition. Changes to annotations are also governed by its definition.
    -   Parameters must not be removed from or added to the parameter interface.
    -   Associations to a released target data source must not be removed and the target data source must not be exchanged in that case..
    -   No implicit SELECT list \* is allowed.
    -   Only positions of non-key elements can be changed if allowed by the data category.
    -   Only non-key elements can be added.
    -   Changes to the elementary data types of elements and parameters are allowed but must follow the general rules for elementary data types listed above.
-   [CDS behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry")
    -   Behavior definitions must follow strict mode, must not be managed by BOPF and can only be released for language version ABAP for Cloud Development. The release is restricted to interfaces and abstract entities.
    -   The underlying CDS entity must be released and CREATE operations are allowed for the root node only.
    -   Parameters and results of actions and functions must be DDIC data elements or CDS entities.

Objects implemented in ABAP

Others than the following objects cannot be classified with the C1 contract.

-   [Classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclass_glosry.htm "Glossary Entry") and [Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoo_intf_glosry.htm "Glossary Entry")
    -   Classes must be final or abstract and the instantiation must be private.
    -   Changes to public elementary types must follow the general rules for elementary data types listed above.
        
        No components can be removed from public structured types.
        
        Public table types must not be generic. Their row types and table keys must not be changed.
        
    -   Attributes and method parameters must not be changed. Their data types must be released.
    -   Methods must not be deleted, their kind (static, instance) must not be changed and visibility must not be reduced. They must raise class-based exceptions only.
    -   Optional parameters can be added to methods and events. The preferred parameter must be stable. An optional parameter cannot become mandatory.
-   [Function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunction_module_glosry.htm "Glossary Entry")
    -   Function modules can only be released for language version ABAP for Cloud Development.
    -   Remote-enabled or update function modules cannot be changed to regular ones and their properties must be stable.
    -   Parameters must not be changed.
    -   Optional parameters can be added. An optional parameter cannot become mandatory.
    -   Exceptions cannot be added and non-class-based exceptions must not be deleted.


### abenc1_consumer_rules.htm

  

* * *

AS ABAP Release 756, ©Copyright 2022 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_strict_rules.htm) →  [Working with released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_apis.htm) →  [Compatibility Rules for the C1 Contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_compatibility_rules.htm) → 

C1 Contract Rules for API Consumers

The [provider rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_provider_rules.htm) for objects with C1 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed changes to released APIs that must be considered when accessing them.

-   [Changes to Elementary Data Types](#@@ITOC@@ABENC1_CONSUMER_RULES_1)
    -   [Operations with Elementary Data Objects](#@@ITOC@@ABENC1_CONSUMER_RULES_2)
    -   [Operations with Structures](#@@ITOC@@ABENC1_CONSUMER_RULES_3)
-   [Adding or Changing Non-key Elements of Structures](#@@ITOC@@ABENC1_CONSUMER_RULES_4)
    -   [Includes](#@@ITOC@@ABENC1_CONSUMER_RULES_5)
    -   [Assignments and Comparisons](#@@ITOC@@ABENC1_CONSUMER_RULES_6)
    -   [Unstructured Access](#@@ITOC@@ABENC1_CONSUMER_RULES_7)
    -   [Field Symbols](#@@ITOC@@ABENC1_CONSUMER_RULES_8)
    -   [RFC](#@@ITOC@@ABENC1_CONSUMER_RULES_9)
-   [Example](#@@ITOC@@ABENC1_CONSUMER_RULES_10)

Changes to Elementary Data Types

The data type of

-   DDIC domains or DDIC data elements
-   components of DDIC structures and DDIC database tables or elements of CDS entities
-   public types of global ABAP classes or interfaces

can be changed as follows:

-   Integer types INT1, INT2, INT4 or b, s, i can be replaced by integer types of a larger value range.
-   The length of data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or c, p can be increased.
-   The number of decimal places of data types DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or p can be increased.

All these changes result in an enhanced value range compared to the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operations with structured data that contain components of such a type.

Operations with Elementary Data Objects

When working with elementary data objects of one of the above types the behavior after an allowed type change depends on the type, the operand position and the content.

Possible Problems

Examples for possible problems are:

-   In assignments of data objects that have a changed type to data objects whose type is not changed, content can be cut off or overflow exceptions may occur.
-   In statements that require compatible data types, syntax errors can occur. Examples are:
    -   Assignments between [data reference variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_reference_variable_glosry.htm "Glossary Entry").
    -   Access to internal tables with an elementary line type using a table key.
    -   Importing data from data clusters with [IMPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapimport_data_cluster.htm).
-   In statements that require lossless assignments, exceptions can occur. Examples are:
    -   [Lossless Operator EXACT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_exact.htm)
    -   [Host variables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_host_variables.htm) in read positions of ABAP SQL.

Mitigation

When declaring data objects always refer to the released data types itself. Do not refer to self defined types. Use data objects referring to released types only at operand positions, where changing the type cannot produce an error.

Operations with Structures

Changing the data type of a component of a structure changes the [technical type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentechnical_type_attr_glosry.htm "Glossary Entry") of the complete structure. This has a large impact since there are many operand positions, where compatibility is required for structures and generally, the same errors can occur that result from changing the elements of structures described below and the same mitigations apply.

Adding or Changing Non-key Elements of Structures

Non-key elements can be added to global types as structured DDIC types or CDS entities. Those types can be released APIs themselves or can be used for typing attributes or method parameters of releases classes or interfaces. Also the position of non-key Elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

Includes

Including a released structure into another structure.

Possible Problems

Error, when a component is added that already exists.

Mitigation

Include a released structure only by renaming its components with [suffixes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_include_structure.htm).

Assignments and Comparisons

Assignments and comparisons between data objects that are typed with the released structured type and data objects that are typed otherwise can occur for:

-   [Logical Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp.htm)
-   [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm)
-   [Working with internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm)
-   [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm)
-   [Working with data clusters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_cluster.htm)

Possible Problems

Depending on the change all kinds of errors might occur. Especially, the following allowed changes can affect the rules for processing structures fundamentally:

-   Adding numerical components to a formerly character-like structure.
-   Adding [deep](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeep_glosry.htm "Glossary Entry") components to a formerly [flat](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenflat_glosry.htm "Glossary Entry") structure.
-   Shifting the positions of numerical or deep components to formerly character-like sections.

Mitigation

No assignments or comparisons between released structures and data objects that are typed otherwise. No usage of otherwise defined structures in ABAP SQL. The various CORRESPONDING mechanisms can be used to mitigate the problem, but they are not failsafe in all situations.

Unstructured Access

Processing the content of a released structure without addressing single components as for example:

-   [Offset/Length Specifications](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoffset_length.htm)
-   [String processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) (on complete structure)

Possible Problems

Depending on the change (see above) all kinds of errors might occur.

Mitigation

No processing of released structures without accessing single components.

Field Symbols

Addressing released structures with [field symbols](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfield_symbol_glosry.htm "Glossary Entry") by using:

-   [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm)
-   ASSIGNING addition when [working with internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab.htm)

Possible Problems

When the addition [CASTING](abapassign_casting.htm#!ABAP_ALTERNATIVE_2@2@) is used, deep components must appear with exactly the same type and position in the assigned structure.

Mitigation

No casting assignment of released structures to field symbols.

RFC

Passing released structures to remote [RFMs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfm_glosry.htm "Glossary Entry").

Possible Problems

Deep components are not supported in RFC.

Mitigation

No passing of released structures to remote RFMs.

Example

The first part of the example simulates data types from the ABAP Dictionary by data types defined in the program. The second part represents consumer code working with these data types in an unfavorable way by mixing them with locally defined types. If changes allowed by C1 contract are applied to the pseudo external types, syntax errors and exceptions occur.

\*Pseudo DDIC types
TYPES:
  ddic\_de\_i TYPE i,
  ddic\_de\_c TYPE c LENGTH 3,
  BEGIN OF ddic\_struc,
    text TYPE ddic\_de\_c,
    int  TYPE ddic\_de\_i,
  END OF ddic\_struc.
DATA ddic\_dbtab TYPE HASHED TABLE OF ddic\_struc WITH UNIQUE key text.
\*Consumer Code
DATA int TYPE ddic\_de\_i.
"Exception when DDIC\_DE\_I is changed to int8
"and int exceeds value range of i
DO int TIMES.
  ...
ENDDO.
"Syntax error when DDDIC\_DE\_I is changed to int8
DATA dref TYPE REF TO i.
dref = REF #( int ).
"Syntax error when DDIC\_DE\_I is changed to int8
DATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
INSERT int INTO TABLE itab.
DATA char TYPE ddic\_de\_c.
"Exception when length of DDIC\_DE\_C is increased
"and char contains more than three relevant characters
SELECT carrname
       FROM scarr
       WHERE carrid = @char
       INTO TABLE @DATA(result).
DATA:
  struc1 TYPE ddic\_struc,
  BEGIN OF struc2,
    text TYPE c LENGTH 3,
    int  TYPE i,
  END OF struc2.
"Syntax errors when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
struc1 = struc2.
IF struc1 = struc2.
  ...
ENDIF.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
FIELD-SYMBOLS <fs> TYPE ddic\_struc.
ASSIGN struc2 TO <fs> CASTING.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
SELECT single \*
       from @ddic\_dbtab as dbtab
       into @struc2.


### abenc1_compatibility_rules.htm

  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_strict_rules.htm) →  [Working with released APIs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_apis.htm) → 

Compatibility Rules for the C1 Contract

The [C1 contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_contract_glosry.htm "Glossary Entry") is the [release contract](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrelease_contract_glosry.htm "Glossary Entry") that is crucial for system-internal access to APIs from other repository objects. It guarantees stable APIs for use within the same [AS ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_abap_glosry.htm "Glossary Entry"). The following topic list the most important rules that must be obeyed by API providers and API consumers.

-   [C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_provider_rules.htm)
-   [C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_consumer_rules.htm)

Continue
[C1 Contract Rules for API Providers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_provider_rules.htm)
[C1 Contract Rules for API Consumers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenc1_consumer_rules.htm)
