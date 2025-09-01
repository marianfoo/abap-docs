# ABAP Keyword Documentation / ABAP - Dictionary / Classic Objects in ABAP Dictionary / Enhancements

Included pages: 9


### abenddic_enhancements.htm

---
title: "Enhancements"
description: |
  A structure(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm), database table(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm), database view(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_v
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm"
abapFile: "abenddic_enhancements.htm"
keywords: ["do", "if", "try", "class", "data", "abenddic", "enhancements"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) → 

Enhancements

A [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm), [database table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm), [database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm), or [domain](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_domains.htm) in ABAP Dictionary created in a system can be enhanced in a different system using customizing includes, append structures, or append views without making any modifications. Customizing includes indicate points already marked by SAP for enhancements, whereas append structures can be appended anywhere.

-   [Customizing includes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_customizing_includes.htm)

-   [Append structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm)

-   [Append views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_views.htm)

-   [Fixed value appends](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_fixed_value_appends.htm)

[Search helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm "Glossary Entry") can be expanded using [append search helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenappend_search_help_glosry.htm "Glossary Entry").

Extensions are connection to [Switch Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_framework_glosry.htm "Glossary Entry") whenever they are defined in a [package](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpackage_glosry.htm "Glossary Entry") that is assigned a [switchSchalter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry").

Note

For [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS view enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_extend_glosry.htm "Glossary Entry") are an option for enhancements that is based on the CDS DDL in ABAP CDS.

Continue
[Customizing Includes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_customizing_includes.htm)
[Append Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm)
[Append Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_views.htm)
[Fixed Value Appends](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_fixed_value_appends.htm)


### abenddic_customizing_includes.htm

---
title: "Customizing Includes"
description: |
  A customizing include is a structure in ABAP Dictionary whose name has the prefix CI_ for customers and SI_ for partners and is in the customer namespace. Customizing includes can be included in structures(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) and d
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_customizing_includes.htm"
abapFile: "abenddic_customizing_includes.htm"
keywords: ["insert", "do", "if", "class", "data", "abenddic", "customizing", "includes"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) → 

Customizing Includes

A customizing include is a structure in ABAP Dictionary whose name has the prefix CI\_ for customers and SI\_ for partners and is in the customer namespace. Customizing includes can be included in [structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) and [database tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) delivered by SAP. The customizing includes in structures and database tables delivered by SAP are usually empty. They are not associated with existing structures and reserve only the names of the structures. In customer or partner systems, these includes can be enhanced as part of an [enhancement category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_enh_cat.htm) in customizing by creating the included customizing includes and using customizing transactions to give them components. Any existing transparent database tables are not transformed, which can put the fields in different orders in the dictionary and on the database.

A customizing include can be included in multiple database tables or structures. Its enhancement is then applied to all database tables or structures in which it is included. An empty customizing include of a database table or structure does not need to be enhanced.

Enhancements of a delivered structure or database table using a customizing include are not modifications. If a customizing include is used to add fields to a database table or structure in the standard system, these fields are inserted automatically in the new structure or database table delivered by SAP in an upgrade.


### abenddic_append_structures.htm

---
title: "Append Structures"
description: |
  An append structure is a structure in ABAP Dictionary appended to another structure(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) or database table(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) and which adds its co
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm"
abapFile: "abenddic_append_structures.htm"
keywords: ["insert", "do", "if", "try", "class", "data", "abenddic", "append", "structures"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) → 

Append Structures

An append structure is a structure in ABAP Dictionary appended to another [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) or [database table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) and which adds its components to this structure or table. In customer systems, append structures can be added to structures and database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_techstruc.htm) for table fields.

The following enhancements can be made to a database table or structure using an append structure:

-   New components inserted (if permitted by the [enhancement category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_enh_cat.htm))

-   [Foreign keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_glosry.htm "Glossary Entry") defined for existing fields of a database table

-   [Search helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm "Glossary Entry") bound to existing components

All enhancements are part of the append structure, which means that any changes made to these enhancements are made only using the append structure. The same applies to transports. When a database table or structure is activated, all associated append structures are found and their components are appended to the database table or structure. Any foreign keys or search help bindings added using the append structure are also appended. When an append structure is activated, the assigned database table or structure is adapted to the changes made. Any existing tables are not [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_conv.htm), which can put the fields in the dictionary in a different order from the order on the database. When a structure or database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to enhance database tables:

-   Append structures can only be appended to [transparent tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransparent_table_glosry.htm "Glossary Entry").

-   No append structures can be appended to database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.

-   Any fields appended to a database table using an append structure can be added to its [secondary indexes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_index.htm). No secondary index can be defined for the append structure itself.

-   A binding of a check table or search help that already exists for a field of the database table cannot be modified using the append structure.

Enhancements of SAP structures or SAP tables using append structures in customer systems do not constitute modifications. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures of this type with names from the customer namespace to avoid naming conflicts. After an upgrade, the associated append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_extend_type.htm)

Note

The same structure can be appended to multiple database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE enhances the structure DEMO\_STRUCTURE.

Continue
[Dictionary DDL for Structure Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_extend_type.htm)


### abenddic_extend_type.htm

---
title: "Dictionary DDL for Structure Enhancements"
description: |
  In the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm 'Glossary Entry'), a structure or database table can be given a source-code-based enhancement known as an append structure in Dictionary DDL(https://help.sap.com/doc/abapdocu_754_ind
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_extend_type.htm"
abapFile: "abenddic_extend_type.htm"
keywords: ["do", "try", "class", "data", "abenddic", "extend", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) →  [Append Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm) → 

Dictionary DDL for Structure Enhancements

In the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"), a structure or database table can be given a source-code-based enhancement known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, however, the source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_extend_type.htm)

Note

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[EXTEND TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_extend_type.htm)


### abenddicddl_extend_type.htm

---
title: "EXTEND TYPE"
description: |
  Syntax structure_annos(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_props.htm) EXTEND TYPE structdbtab WITH append_struct  ... component(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm) ... extend(
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_extend_type.htm"
abapFile: "abenddicddl_extend_type.htm"
keywords: ["do", "if", "try", "class", "data", "abenddicddl", "extend", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) →  [Append Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm) →  [Dictionary DDL for Structure Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_extend_type.htm) → 

EXTEND TYPE

Syntax

[structure\_annos](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_props.htm)
EXTEND TYPE struct*|*dbtab WITH append\_struct {
  ...
  [component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm)
  *\[*...
  [extend](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comp_ext.htm)
  ...*\]*;
  ...
  [include;](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm)
  ...
}

Effect

[Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") statement for defining an ABAP Dictionary [append structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm) append\_struct in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry").

-   The statement EXTEND TYPE adds the append structure append\_struct defined here either to an existing structure struct or to a database table dbtab.

-   The mandatory properties of the append structure must be specified in front of the statement EXTEND TYPE using the same annotations [structure\_annos](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_props.htm) as in the definition of a structure.

-   As in the definition of a structure using [DEFINE STRUCTURE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_structure.htm), the components of the append structure are defined in a semicolon-separated list in curly brackets { }, either as individual components [component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comps.htm) or by including include structures [include](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_incl.htm).

-   As when including structures, an assignment to a search help and a definition of a foreign key dependency can be overwritten using additions [extend](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_define_struct_comp_ext.htm) in a blank-separated list.

Notes

-   As in the [CDS syntax](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_general_syntax_rules.htm), the definition of an ABAP Dictionary append structure can contain comments after // and between /\* ... \*/.

-   A more detailed description of the syntax is available in the ADT documentation Syntax of ABAP Dictionary Objects.

Example

Adds the append structure DEMO\_APPEND\_STRUCTURE to the structure DEMO\_STRUCTURE in the ADT.

@EndUserText.label : 'Demo append structure'
@AbapCatalog.enhancementCategory : #EXTENSIBLE\_CHARACTER\_NUMERIC
extend type demo\_structure with demo\_append\_structure {
  comp3 : dats;
  comp4 : tims; }

The source code used to define the structure DEMO\_STRUCTURE is not modified by this enhancement. In the ADT, however, an icon indicates that the structure is enhanced using DEMO\_APPEND\_STRUCTURE.


### abenddic_extend_type.htm

---
title: "Dictionary DDL for Structure Enhancements"
description: |
  In the ABAP Development Tools (ADT)(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm 'Glossary Entry'), a structure or database table can be given a source-code-based enhancement known as an append structure in Dictionary DDL(https://help.sap.com/doc/abapdocu_754_ind
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_extend_type.htm"
abapFile: "abenddic_extend_type.htm"
keywords: ["do", "try", "class", "data", "abenddic", "extend", "type"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) →  [Append Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm) → 

Dictionary DDL for Structure Enhancements

In the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"), a structure or database table can be given a source-code-based enhancement known as an append structure in [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry"). Here, however, the source code of an append structure is not saved and transported. Instead, the source code of an existing append structure is generated from the metadata of the associated system tables. When saved, the metadata is derived directly from the append structure and saved to the system tables.

-   [EXTEND TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_extend_type.htm)

Note

Each property of an append structure can be defined using either EXTEND TYPE or in the transaction SE11.

Continue
[EXTEND TYPE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddicddl_extend_type.htm)


### abenddic_append_structures.htm

---
title: "Append Structures"
description: |
  An append structure is a structure in ABAP Dictionary appended to another structure(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) or database table(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) and which adds its co
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_structures.htm"
abapFile: "abenddic_append_structures.htm"
keywords: ["insert", "do", "if", "try", "class", "data", "abenddic", "append", "structures"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) → 

Append Structures

An append structure is a structure in ABAP Dictionary appended to another [structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures.htm) or [database table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables.htm) and which adds its components to this structure or table. In customer systems, append structures can be added to structures and database tables delivered by SAP. An append structure is assigned to exactly one table or structure. There can, however, be more than one append structure for a table or structure. The components of append structures must meet the [prerequisites](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_techstruc.htm) for table fields.

The following enhancements can be made to a database table or structure using an append structure:

-   New components inserted (if permitted by the [enhancement category](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_structures_enh_cat.htm))

-   [Foreign keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_glosry.htm "Glossary Entry") defined for existing fields of a database table

-   [Search helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm "Glossary Entry") bound to existing components

All enhancements are part of the append structure, which means that any changes made to these enhancements are made only using the append structure. The same applies to transports. When a database table or structure is activated, all associated append structures are found and their components are appended to the database table or structure. Any foreign keys or search help bindings added using the append structure are also appended. When an append structure is activated, the assigned database table or structure is adapted to the changes made. Any existing tables are not [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_conv.htm), which can put the fields in the dictionary in a different order from the order on the database. When a structure or database table with an append structure is copied, the appended fields, foreign keys, and search helps become real elements of the target of the copy.

The following must be noted when using append structures to enhance database tables:

-   Append structures can only be appended to [transparent tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransparent_table_glosry.htm "Glossary Entry").

-   No append structures can be appended to database tables with fields of the type LCHR or LRAW, since these fields must always be the last field of the table.

-   Any fields appended to a database table using an append structure can be added to its [secondary indexes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_index.htm). No secondary index can be defined for the append structure itself.

-   A binding of a check table or search help that already exists for a field of the database table cannot be modified using the append structure.

Enhancements of SAP structures or SAP tables using append structures in customer systems do not constitute modifications. Append structures created for SAP objects in customer systems are in the customer namespace (or in the namespace of a partner of a special development project) and hence are protected from being overwritten by upgrades. It is advisable to also create the components of append structures of this type with names from the customer namespace to avoid naming conflicts. After an upgrade, the associated append structures are again appended to tables modified by SAP.

Append structures can be defined as form-based structures in transaction SE11 or as source-code-based structures using [Dictionary DDL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendictionary_ddl_glosry.htm "Glossary Entry") in the [ABAP Development Tools](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadt_glosry.htm "Glossary Entry"). The following section is a summary of the syntax of the source code-based definition:

-   [Dictionary DDL for Structure Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_extend_type.htm)

Note

The same structure can be appended to multiple database tables or structures by including it in the individual append structures as an include structure.

Example

The append structure DEMO\_APPEND\_STRUCTURE enhances the structure DEMO\_STRUCTURE.

Continue
[Dictionary DDL for Structure Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_extend_type.htm)


### abenddic_append_views.htm

---
title: "Append Views"
description: |
  Database views(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm) delivered by SAP can be enhanced by partners and customers using views known as append views, without making any modifications. The name of an append view is subject to the same rules as the name
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_append_views.htm"
abapFile: "abenddic_append_views.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "abenddic", "append", "views"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) → 

Append Views

[Database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm) delivered by SAP can be enhanced by partners and customers using views known as append views, without making any modifications. The name of an append view is subject to the same rules as the name of a classic [view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm) and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

Further fields from basis tables in the database view can be added to append views as view fields. Append views cannot be used to add further basis tables to the view or to modify the join conditions or selection conditions of a database view. An append view is assigned to exactly one database view. More than one append view can be created for a database view.

When an append view is activated, an [append structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenappend_structure_glosry.htm "Glossary Entry") with this name is created in ABAP Dictionary and its components become the additional view fields of the append view.

If a database view is activated, all append views for this view are found and their fields are appended to the database view. The append structure of the append view is added to the structure of the database view. If an append view is created or modified, the associated database view is adjusted to this change automatically when the append view is activated.

Notes

-   Append views are possible only for database views and not for other [views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_views.htm).

-   In the case of [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS view enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_extend_glosry.htm "Glossary Entry") are a separate option for enhancements and work in the similar way to append views. When a CDS view enhancement is created, an append view is created that enhances the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry").

Example

The database view DEMO\_ORIGINAL is enhanced using the append view DEMO\_APPEND\_VIEW. The program DEMO\_APPEND\_VIEW uses [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) to access the enhanced view and also displays the components of the structures in question.


### abenddic_fixed_value_appends.htm

---
title: "Fixed Value Appends"
description: |
  Domains(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_domains.htm) delivered by SAP can be enhanced by partners and customers using appends known as fixed value appends, without making any modifications. The name of a fixed value append is subject to the same rules as the nam
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_fixed_value_appends.htm"
abapFile: "abenddic_fixed_value_appends.htm"
keywords: ["do", "if", "try", "class", "abenddic", "fixed", "value", "appends"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_enhancements.htm) → 

Fixed Value Appends

[Domains](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_domains.htm) delivered by SAP can be enhanced by partners and customers using appends known as fixed value appends, without making any modifications. The name of a fixed value append is subject to the same rules as the name of a domain and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A fixed value append adds further [fixed values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_value_glosry.htm "Glossary Entry") or intervals to the value range of a domain. A domain can have more than one fixed value append.

When a domain is activated, all fixed value appends for this domain are found and their fixed values and intervals added to the domain. When a fixed value append is created or modified, the associated domain is adjusted to this change automatically when the fixed value append is activated.

Example

The fixed value append DEMO\_FIXED\_VALUE\_APPEND is added to the domain DEMO\_ORIGINAL. The program DEMO\_FIXED\_VALUE\_APPEND reads the fixed values and intervals of the extended domain and displays them. In the table, the column APPVAL indicates which fixed values and intervals come from the fixed value append.
