# ABAP Keyword Documentation / ABAP − Reference / ABAP RESTful Programming Model / Derived Types

Included pages: 6


### abenrpm_derived_types.htm

---
title: "Derived Types"
description: |
  ABAP Compiler makes it possible to create derived types for type-secure parameters of a business object provider. Data types like this are known as derived types, since the compiler derives them from CDS entity types and their behavior definition implicitly. Derived types contain at least the instan
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm"
abapFile: "abenrpm_derived_types.htm"
keywords: ["do", "if", "method", "data", "types", "abenrpm", "derived"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) → 

Derived Types

ABAP Compiler makes it possible to create derived types for type-secure parameters of a business object provider. Data types like this are known as derived types, since the compiler derives them from CDS entity types and their behavior definition implicitly.

Derived types contain at least the instance key (in accordance with the CDS definition) and possibly also the full row type, plus any other components produced by the model (for example, the parameters of an action).

When a business object provider is implemented, certain derived types can be used in method signatures in the context of the behavior implementation. This means the syntax can be used to create both local and global derived data types, which are used to declare input parameters or output parameters.

Continue
[Input Parameter Type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_input_parameters.htm)
[Type of the Output Parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm)
[Specific Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspecific_derived_types.htm)
[Variables with Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariables_derived_types.htm)
[Component of the Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm)


### abenrpm_input_parameters.htm

---
title: "Input Parameter Type"
description: |
  Syntax TYPES type_for_import_parameter TYPE TABLE FOR CREATEUPDATEDELETELOCKREAD IMPORT CDS_entity_name. TYPES type_for_action_import_parameter TYPE TABLE FOR ACTION IMPORT entity_name~action_name. Effect Each individual type declaration for input parameters consists of a comb
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_input_parameters.htm"
abapFile: "abenrpm_input_parameters.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "types", "abenrpm", "input", "parameters"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) → 

Input Parameter Type

Syntax

TYPES type\_for\_import\_parameter TYPE TABLE FOR
      CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT
      CDS\_entity\_name.
TYPES type\_for\_action\_import\_parameter TYPE TABLE FOR
      ACTION IMPORT entity\_name~action\_name.

Effect

Each individual type declaration for input parameters consists of a combination of an operation (CREATE, UPDATE, DELETE, LOCK or READ IMPORT) and an entity or an entity part (for actions).

The type name of the input parameter type\_for\_import\_parameter can be specified freely.

If available, the [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm) specified in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_definition_glosry.htm "Glossary Entry") should be used to reference a CDS entity Therefore, CDS\_entity\_name refers to the name of the CDS entity or the alias as defined in the behavior definition.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_create   TYPE TABLE FOR CREATE      travel
      tt\_travel\_update   TYPE TABLE FOR UPDATE      travel
      tt\_travel\_delete   TYPE TABLE FOR DELETE      travel
      tt\_travel\_key      TYPE TABLE FOR LOCK        travel
      it\_booking\_read\_in TYPE TABLE FOR READ IMPORT booking.
    TYPES tt\_travel\_set\_status\_booked\_in
      TYPE TABLE FOR ACTION IMPORT travel~set\_status\_booked.
    TYPES tt\_travel\_get\_status\_booked\_in
      TYPE TABLE FOR ACTION IMPORT travel~get\_status.
    ...
ENDCLASS.


### abenrpm_export_parameters.htm

---
title: "Type of the Output Parameter"
description: |
  Syntax TYPES type_for_export_parameter TYPE TABLE FOR FAILED LATE MAPPED LATE REPORTED LATE READ RESULT CDS_entity_name. TYPES type_for_action_export_parameter TYPE TABLE FOR ACTION RESULT CDS_entity_name~action_name. TYPES ts_reported TYPE RESPONSE FOR
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm"
abapFile: "abenrpm_export_parameters.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "class", "data", "types", "abenrpm", "export", "parameters"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) → 

Type of the Output Parameter

Syntax

TYPES type\_for\_export\_parameter TYPE TABLE FOR
         FAILED *\[*LATE*\]**|*
         MAPPED *\[*LATE*\]**|*
         REPORTED *\[*LATE*\]**|*
         READ RESULT
      CDS\_entity\_name.
TYPES type\_for\_action\_export\_parameter TYPE TABLE FOR
         ACTION RESULT
      CDS\_entity\_name~action\_name.
TYPES ts\_reported TYPE RESPONSE FOR
         FAILED *\[*LATE*\]**|*
         MAPPED *\[*LATE*\]**|*
         REPORTED *\[*LATE*\]*
      behavior\_definition\_name.

Effect

The output parameters FAILED, MAPPED, and REPORTED are structure types that contain one component for each entity of the business object:

-   MAPPED *\[*LATE*\]*
    Provides the consumer with ID mapping information.
    The mapping information is available in the interaction phase by default. The [%CID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) is then mapped to the real key or to the [%PID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm). The addition LATE specifies that the mapping information is available only when saving. This is important when [late numbering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlate_numbering_glosry.htm "Glossary Entry") is used (the method [adjust\_numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensaver_adjust_numbers.htm)), during which the %PID is mapped to the real key.

-   FAILED *\[*LATE*\]*
    Contains information that identifies the data record when an error occurs.
    FAILED is provided during the [interaction phase](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) and contains the %CID or the [%KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm) to specify instances for which an operation (CREATE, UPDATE, DELETE, LOCK, or READ IMPORT) has failed. FAILED with the addition LATE is provided during the [save phase](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_implementations.htm) only and contains the %PID or the %KEY, but not the %CID.

-   REPORTED *\[*LATE*\]*
    This parameter is used to send error messages.
    REPORTED is provided during the interaction phase and contains the %CID or the %KEY to specify instances for which an operation has failed. REPORTED LATE is provided when saving only and contains the %PID or the %KEY, but not the %CID.

-   READ RESULT
    This parameter is used to return the result of the operation READ.

The type name of the output parameter (type\_for\_export\_parameter, type\_for\_action\_export\_parameter, and ts\_reported) can be specified freely.

CDS\_entity\_name refers to the name of the CDS entity or the [alias](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_alias.htm) as defined in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) for the CDS entity.

...TYPE RESPONSE FOR... are structures that contain one component for each entity of the business object.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_failed      TYPE TABLE FOR FAILED      travel
      tt\_travel\_mapped      TYPE TABLE FOR MAPPED      travel
      tt\_travel\_mapped\_late TYPE TABLE FOR MAPPED LATE travel
      tt\_travel\_reported    TYPE TABLE FOR REPORTED    travel
      tt\_booking\_read\_out   TYPE TABLE FOR READ RESULT booking.
    TYPES:
      tt\_travel\_set\_status\_booked\_ou
       TYPE TABLE FOR ACTION RESULT travel~set\_status\_booked.
      tt\_travel\_get\_status\_out
       TYPE TABLE FOR ACTION RESULT travel~get\_status.
    ...
ENDCLASS.


### abenspecific_derived_types.htm

---
title: "Specific Derived Types"
description: |
  Syntax TYPES type_for_update TYPE TABLE FOR UPDATE CDS_entity_name. TYPES type_for_id     TYPE LINE OF          type_for_update-%key. TYPES type_for_data   TYPE LINE OF          type_for_update-%data. TYPES type_for_row    TYPE STRUCTURE FOR    type_for_update. Effect Alongside deriv
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenspecific_derived_types.htm"
abapFile: "abenspecific_derived_types.htm"
keywords: ["update", "do", "if", "class", "data", "types", "abenspecific", "derived"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) → 

Specific Derived Types

Syntax

TYPES type\_for\_update TYPE TABLE FOR UPDATE CDS\_entity\_name.
TYPES type\_for\_id     TYPE LINE OF          type\_for\_update-%key.
TYPES type\_for\_data   TYPE LINE OF          type\_for\_update-%data.
TYPES type\_for\_row    TYPE STRUCTURE FOR    type\_for\_update.

Effect

Alongside derived parameter types (the types of the [input parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_input_parameters.htm) and [output parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_export_parameters.htm)), certain derived data types can also be defined for the ID fields and data fields.

Using TYPE STRUCTURE FOR it is possible to directly get the row type of a derived table type. This way, the two-stage solution using LINE OF can be avoided.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The root entity Travel represents the business object for managing flight trips. The underlying data model and the behavior of the root entity Travel are described in [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm).

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES:
      tt\_travel\_update       TYPE TABLE FOR UPDATE  travel
      ts\_travel\_update\_id    TYPE LINE OF   tt\_travel\_update-%key
      ts\_travel\_update\_data  TYPE LINE OF   tt\_travel\_update-%data
      tt\_travel\_update\_row   TYPE STRUCTURE FOR   tt\_travel\_update.
    ...
ENDCLASS.

This translation does not reflect the current version of the documentation.


### abenvariables_derived_types.htm

---
title: "Variables with Derived Types"
description: |
  Syntax TYPES dtype TYPE TABLE FOR CREATEUPDATEDELETELOCKREAD IMPORT MAPPED LATE REPORTED LATEFAILED LATE ACTION entity_name. DATA dtype TYPE TABLE FOR CREATEUPDATEDELETELOCKREAD IMPORT MAPPED LATE REPORTED LATEFAIL
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariables_derived_types.htm"
abapFile: "abenvariables_derived_types.htm"
keywords: ["update", "delete", "do", "if", "case", "method", "class", "data", "types", "abenvariables", "derived"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) → 

Variables with Derived Types

Syntax

TYPES dtype TYPE TABLE FOR
        CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
        MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
        ACTION
      entity\_name.
DATA dtype TYPE TABLE FOR
        CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
        MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
        ACTION
     entity\_name.
CREATE DATA dref TYPE TABLE FOR
              CREATE*|*UPDATE*|*DELETE*|*LOCK*|*READ IMPORT*|*
              MAPPED *\[*LATE*\]**|* REPORTED *\[*LATE*\]**|*FAILED *\[*LATE*\]**|*
              ACTION
            entity\_name.

Effect

In the case of modularization, it may be necessary to declare variables with derived types outside the reserved handler methods too. For this purpose, a special syntax in the form TYPE TABLE FOR is provided, which is supported in the statements TYPES, DATA and CREATE DATA.

It is not possible to use an alias to reference the entity here, only the entity\_name. This is because, unlike in handler methods, no reference to a specific behavior definition is given.

Data objects with derived type can also be created dynamically, preferably using the method CL\_ABAP\_BEHVDESCR=>CREATE\_DATA( ). The way the objects are created is based on absolute types. If preferred, these types can be constructed manually and instantiated using CREATE DATA dref TYPE (name).

The absolute name starts with \\BDEF=, followed by bdef\_name (the name of the behavior definition). This is usually followed by \\ENTITY=entity\_name and a specified operation. The schema for all derived types is as follows:

\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=CREATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=UPDATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=DELETE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=LOCK
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED\_LATE

For the operation READ IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_I

For the operation READ RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_R

For the operation ACTION IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_name\\TYPE=IMPORTING

For the operation ACTION RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_name\\TYPE=RETURNING

For the operation read-by-association IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_I

For the operation read-by-association RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_R

For the operation read-by-association LINK:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=LINK

For the operation create-by-association:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=CREATE

For response structures:
\\BDEF=bdef\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\TYPE=REPORTED
\\BDEF=bdef\_name\\TYPE=REPORTED\_LATE

Example

CLASS lcl\_handler DEFINITION
        INHERITING FROM cl\_abap\_behavior\_handler.
  PRIVATE SECTION.
    TYPES it\_item\_c         TYPE TABLE FOR CREATE sales\_order\_item.
    DATA  it\_root\_u         TYPE TABLE FOR UPDATE sales\_order.
    CREATE DATA rt\_item\_ri  TYPE TABLE FOR READ IMPORT
                sales\_order\_item.
    DATA et\_item\_rr    TYPE TABLE FOR READ RESULT sales\_order\_item
    TYPES et\_root\_f    TYPE TABLE FOR FAILED sales\_order.
    TYPES it\_root\_l    TYPE TABLE FOR LOCK sales\_order.
    TYPES it\_item\_a\_in     TYPE TABLE FOR ACTION IMPORT
          sales\_order\_item~add\_supplement.
    DATA et\_root\_a\_out     TYPE TABLE FOR ACTION RESULT
         sales\_order~set\_final\_status.
    CREATE DATA rt\_ri\_items TYPE TABLE FOR READ IMPORT
           sales\_order\\\_items.
    DATA lt\_rr\_items        TYPE TABLE FOR READ RESULT
         sales\_order\\\_items.
    DATA lt\_rl\_items    TYPE TABLE FOR READ LINK sales\_order\\\_items.
    ...
ENDCLASS.


### abencomponents_derived_types.htm

---
title: "Component of the Derived Types"
description: |
  Derived data types(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) in the context of the ABAP RESTful programming model(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenr_a_p_glosry.htm 'Glossary Entry') also contain components that are not bas
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponents_derived_types.htm"
abapFile: "abencomponents_derived_types.htm"
keywords: ["insert", "update", "delete", "do", "if", "try", "method", "data", "types", "abencomponents", "derived"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Derived Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) → 

Component of the Derived Types

[Derived data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_derived_types.htm) in the context of the [ABAP RESTful programming model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenr_a_p_glosry.htm "Glossary Entry") also contain components that are not based on the row type of the entity and that start with the character % to avoid naming conflicts with original components. For example, the row type of the failed table failed contains a component %FAIL used to save the symptom of a failed instance, plus an include structure %KEY that contains all primary key fields of the entity.

The following list contains the most frequent components of the derived types:

-   Content ID %CID
    A temporary primary key for an instance (if the business object runtime did not create a primary key).
    The content ID is granted to bind the result of an operation to a name and address it again in a later operation. More specifically this applies to the operation CREATE, where the input does not contain the granted instance key (except where keys are granted externally). The component %CID is generated in the operations CREATE, UPDATE, DELETE, create-by-association, and ACTION and applied to the parameters failed, mapped, and reported.

-   %CID\_REF
    A reference to the content ID %CID.

-   %KEY
    Contains all key elements of an entity.
    The component %KEY is generated in the operations CREATE, UPDATE, DELETE, create-by-association, ACTION, READ, and read-by-association and applied to the parameters LINK, failed, mapped und reported.

-   %PID
    The temporary ID component of type ABP\_BEHV\_PID.
    %PID is available only if [late numbering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_late_numbering.htm) is defined in the [behavior definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_definition_glosry.htm "Glossary Entry") without the addition in place. %PID is used only if the application does not provide a temporary primary key %TMP. In the operation CREATE, %PID must be entered in the mapped table and hence set with respect to %CID.
    The component %PID is generated in the operations UPDATE, DELETE create-by-association, ACTION, READ, and read-by-association and applied to the parameters failed, mapped, and reported.

-   %PIDPARENT and %PID\_Assoc
    In the period before the final keys are granted, the %PID fields must represent the instance hierarchy and their associations using non-composition associations. The instance hierarchy is represented using the field %PIDPARENT, which (generically) applies the function of the superordinate foreign key. The associations are provided using %PID\_Assoc fields, which are inserted in a target entity with late numbering and simple cardinality for each association with the name (or alias Assoc) released in a transactional way. Cardinality 0..1 or 1 matches a foreign key in the source entity. %PID\_Assoc applies this function if it is not filled.

-   %CONTROL
    Specifies which elements of an entity are requested by the consumer.
    For each entity element, the control structure %CONTROL contains a flag specifying whether the field in question is provided or requested by the consumer. The fields of the entity have the uniform type ABP\_BEHV\_FLAG.
    The component %CONTROL is generated in CREATE, UPDATE, create-by-association (in %TARGET), and READ IMPORT.

-   %DATA
    Contains all data elements of an entity.
    The component %DATA is generated in CREATE, UPDATE, create-by-association (in %TARGET), and READ RESULT.

-   %FAIL
    Saves the symptom of a failed data record of a business object instance. The possible values of the component %FAIL are defined by the ENUM type IF\_ABAP\_BEHV=>T\_FAIL\_CAUSE.

-   %MSG
    Provides an instance of IF\_ABAP\_BEHV\_MESSAGE. The default methods for the messages new\_message( ) and new\_message\_with\_text( ) can be used.

-   %ELEMENT
    References all elements of an entity

-   %PARAM
    Contains the input type and output type of an action.

Example

Uses components of the derived types in a parameter with errors:

APPEND #VALUE( %KEY = item-%KEY %FAIL = ... ) TO failed-Item.

item points to a row of the input parameters, for example update\_import\_parameter.
