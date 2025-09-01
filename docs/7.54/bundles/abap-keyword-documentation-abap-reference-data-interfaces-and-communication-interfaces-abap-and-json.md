# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / ABAP and JSON / Transformations for JSON / asJSON - Canonical JSON Representation

Included pages: 14


### abenabap_asjson.htm

---
title: "Notes"
description: |
  -   asJSON only occurs in the identity transformation(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm 'Glossary Entry') ID. In particular, asJSON is not generally needed for self-written transformations for JSON; JSON-XML(https://help.sap.com/doc/abapdocu_754_i
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm"
abapFile: "abenabap_asjson.htm"
keywords: ["do", "while", "try", "data", "types", "abenabap", "asjson"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) → 

asJSON - Canonical JSON Representation

The canonical JSON representation asJSON is the format of [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_glosry.htm "Glossary Entry") data that is produced by a serialization of ABAP data using the [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID, or that is required for a deserialization using the identity transformation.

asJSON is based closely on [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml.htm). From a conceptual perspective, a asJSON representation is produced by a restructuring of the asXML representation of this ABAP data to a [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_xml_glosry.htm "Glossary Entry") representation, while keeping all value content. This means the same basic rules apply as for asXML. In particular, XML schema data types for the mapping of ABAP data types are also used in asJSON.

Description of the asJSON format:

-   [General asJSON Format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)

-   [Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm)

Notes

-   asJSON only occurs in the [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID. In particular, asJSON is not generally needed for self-written transformations for JSON; [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_xml_glosry.htm "Glossary Entry") is used directly instead.

-   A JSON-XML representation of asJSON is known as [asJSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasjson_xml_glosry.htm "Glossary Entry"). asJSON-XML is not used as an intermediate format in transformations, but the asJSON-XML associated with a asJSON representation can be created to analyze it and compare it with asXML.

Continue
[asJSON - General Format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)
[asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm)
[asJSON - Mapping Additional XML Schema Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_schema.htm)


### abenabap_asjson_general.htm

---
title: "Executable Example"
description: |
  asJSON, General Format(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_hello_json_abexa.htm)
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm"
abapFile: "abenabap_asjson_general.htm"
keywords: ["do", "if", "case", "try", "class", "data", "abenabap", "asjson", "general"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) → 

asJSON - General Format

The following lines show the general format of the [canonical JSON representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencanonical_json_represen_glosry.htm "Glossary Entry"). Any line breaks and indents are included for ease or reading only.

{
  "bn1":...
  "bn2":...
   ...
  "%heap":{...}
}

The top level contains the object { }. The object components with the names bn1, bn2 ... represent the ABAP data objects specified in the addition source of the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm) as e1 e2 ... or in the addition result as f1 f2 ... The names of the object components bn1, bn2, ... are the names specified there in uppercase.

The values of the object components represent the content of named data object in accordance with the type-dependent mapping described in the following sections. Here, reference variables are always represented as object components whose content is objects that reference the content of referenced anonymous data objects and instances of classes in an optional object component %heap of the top object.

The same rules apply to the names of the object components bn1, bn2 ... as in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_general.htm) and replacements can be made as defined the table specified there.

Executable Example

[asJSON, General Format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_hello_json_abexa.htm)


### abenabap_asjson_abap_types.htm

---
title: "Continue"
description: |
  asJSON - Mapping of Elementary ABAP Types(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm) asJSON - Mapping of Structures(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_struc.htm) asJSON - Mapping of Internal
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm"
abapFile: "abenabap_asjson_abap_types.htm"
keywords: ["do", "data", "types", "internal-table", "abenabap", "asjson", "abap"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) → 

asJSON - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asJSON as the content of the following object components:

[“bn1":...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)
["bn1":...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)
[...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)

An additional object is implemented for the objects referenced by reference variables:

["%heap":...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation; deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm)

-   [Mapping of Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_struc.htm)

-   [Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_table.htm)

-   [Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_enum.htm)

-   [Mapping of Reference Variables and Referenced Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm)

Continue
[asJSON - Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm)
[asJSON - Mapping of Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_struc.htm)
[asJSON - Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_table.htm)
[asJSON - Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_enum.htm)
[asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm)


### abenabap_asjson_abap_types_elem.htm

---
title: "Note"
description: |
  An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option clear(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation_optio
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm"
abapFile: "abenabap_asjson_abap_types_elem.htm"
keywords: ["do", "case", "data", "types", "abenabap", "asjson", "abap", "elem"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Elementary ABAP Types

The values of elementary ABAP types are represented in asJSON using the [JSON representations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) of character-like values and number values. Representations of Boolean values and zero are not used.

-   The values of all numeric types (i, p, decfloat16, decfloat34, f) are represented directly as JSON number values.

-   The values of all other types (c, string, n, d, t, x, xstring) are represented as character-like values in quotation marks.

The type-dependent format of a value corresponds to the [asXML representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_named.htm) of elementary types and can be taken from the tables there. The serialization and deserialization behavior noted there applies.

Note

An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option [clear](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation_options.htm) with the value "all" can be used.

Executable Example

[asJSON for Elementary ABAP Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_elem_abexa.htm)


### abenabap_asjson_abap_types_struc.htm

---
title: "Note"
description: |
  A structure that does not have an associated JSON object component in deserializations retains its previous value. A structure to which an empty object is assigned also remains unchanged, since this has the same effect on the structure components as a missing object component. To initialize the stru
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_struc.htm"
abapFile: "abenabap_asjson_abap_types_struc.htm"
keywords: ["do", "case", "data", "types", "abenabap", "asjson", "abap", "struc"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Structures

In asJSON, an ABAP structure is represented as a [JSON object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) whose object components represent the structure components. The content of each object component corresponds to the canonical representation of the component value. The name of each object component is the name of the corresponding structure component. In serializations, the object components are represented in the order of the components in the structure. In deserializations of the asJSON representation of a structure, the order of the object components is not important and redundant object components are ignored. Components of the structure for which there are no object components remain unchanged.

Note

A structure that does not have an associated JSON object component in deserializations retains its previous value. A structure to which an empty object is assigned also remains unchanged, since this has the same effect on the structure components as a missing object component. To initialize the structure in these cases, the transformation option [clear](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation_options.htm) can be used with the value "all".

Executable Example

[asJSON for Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_struc_abexa.htm)


### abenabap_asjson_abap_types_table.htm

---
title: "Notes"
description: |
  -   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case,
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_table.htm"
abapFile: "abenabap_asjson_abap_types_table.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abenabap", "asjson", "abap", "table"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Internal Tables

Internal tables are represented in asJSON as [JSON arrays](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm). The rows of the internal table are represented in their canonical representation as the components of the array. All table categories are allowed. Serializations do not pass any information about the table category to the JSON data. If the target field of a deserialization is a [sorted table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensorted_table_glosry.htm "Glossary Entry"), the rows are sorted accordingly.

Notes

-   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case, the transformation option [clear](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation_options.htm) with the value "all" can be used.

-   Unlike in the [asXML representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_table.htm) of internal tables, asJSON does not require a name like item for the table rows.

Executable Example

[asJSON for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_table_abexa.htm)


### abenabap_asjson_abap_types_enum.htm

---
title: "Example"
description: |
  Serialization of an internal table with enumerated values by JSON. TYPES: BEGIN OF ENUM color STRUCTURE col, red, blue, green, END OF ENUM color STRUCTURE col. DATA colors TYPE SORTED TABLE OF color WITH UNIQUE KEY table_line. DO. ASSIGN COMPONENT sy-index OF STRUCTURE col TO FIELD-SYMBOL(<fs>). IF
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_enum.htm"
abapFile: "abenabap_asjson_abap_types_enum.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abenabap", "asjson", "abap", "enum"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Enumerated Types

The asJSON representation of [enumerated types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry") corresponds to their [asXML representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_enum.htm). That is, in asJSON the content of an [enumerated object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is represented by the name (maximum 30 characters) of the [enumerated value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_value_glosry.htm "Glossary Entry") in uppercase letters, and this is represented as a character-like [elementary data object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm).

Example

Serialization of an internal table with enumerated values by JSON.

TYPES:
  BEGIN OF ENUM color STRUCTURE col,
    red, blue, green,
  END OF ENUM color STRUCTURE col.
DATA colors TYPE SORTED TABLE OF color
            WITH UNIQUE KEY table\_line.
DO.
  ASSIGN COMPONENT sy-index OF STRUCTURE col TO FIELD-SYMBOL(<fs>).
  IF sy-subrc <> 0.
    EXIT.
  ENDIF.
  colors = VALUE #( BASE colors ( <fs> ) ).
ENDDO.
DATA(writer) = cl\_sxml\_string\_writer=>create(
     type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE colors = colors
                       RESULT XML writer.
cl\_demo\_output=>display\_json( writer->get\_output( ) ).

The output is:

{
"COLORS":
\[
  "RED",
  "BLUE",
  "GREEN"
\]
}


### abenabap_asxml_references.htm

---
title: "Note"
description: |
  -   The asJSON representation of reference variables and referenced objects is only of relevance for XSL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm 'Glossary Entry') transformations and the identity transformation ID. You cannot currently use simple transfor
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm"
abapFile: "abenabap_asxml_references.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenabap", "asxml", "references"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Reference Variables and Objects

A reference mechanism is used (like in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_references.htm)) for the asJSON display of anonymous data objects and class instances (objects), which are addressed using references in reference variables. As [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) does not suggest any syntax for references, an SAP-specific reference mechanism based on asXML is used.

-   Named reference variables are displayed as object components, whose content is usually a key for the referenced objects.

-   The referenced objects are stored as object components in the object [%heap](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm). This name corresponds to the key.

In addition to the value, the dynamic type of the reference variables is specified in the object components of %heap when serialization takes place. This ensures that deserialization is unambiguous.

-   [Named Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_reference_var.htm)

-   [Anonymous Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_anonym_do.htm)

-   [Class Instances](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_class_instances.htm)

Note

-   The asJSON representation of reference variables and referenced objects is only of relevance for [XSL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") transformations and the identity transformation ID. You cannot currently use simple transformations to transform reference variables.

-   For data references, the value "embedded" can be specified for the transformation option [data\_refs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation_options.htm) to define embedded storage in serializations instead of storage in the %heap object component.

Example

For information about the differences between serializing to %heap and embedded storage, see the executable example [Serializations to Heap or Embedded](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserialize_ref_heap_embed_abexa.htm).

Continue
[asJSON - Named Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_reference_var.htm)
[asJSON - Anonymous Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_anonym_do.htm)
[asXML - Instances of Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_class_instances.htm)


### abenabap_asjson_reference_var.htm

---
title: "Executable Example"
description: |
  Serializing Data References(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserialize_dref_abexa.htm)
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_reference_var.htm"
abapFile: "abenabap_asjson_reference_var.htm"
keywords: ["do", "case", "data", "types", "abenabap", "asjson", "reference", "var"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm) → 

asJSON - Named Reference Variables

Like a regular data object, a named reference variable is represented as an object component that has special content:

"bni":{ "%ref":"#key" }

The content of the object component of a named reference variable is an object with precisely one object component, called %ref. The content of the object component %ref is a character-like value "#key", where key is the unique key of an object component in the object %heap. The object of an initial reference is empty. The key key of the ABAP runtime environment is set in serializations; in deserializations, any key can be used.

Otherwise the same rules apply to serializations and deserializations of named reference variables as to [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_reference_variable.htm) and the same special cases need to be noted.

Executable Example

[Serializing Data References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserialize_dref_abexa.htm)


### abenabap_asjson_anonym_do.htm

---
title: "Executable Example"
description: |
  asJSON for Anonymous Data Objects(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_dref_abexa.htm).
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_anonym_do.htm"
abapFile: "abenabap_asjson_anonym_do.htm"
keywords: ["do", "if", "data", "types", "abenabap", "asjson", "anonym"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm) → 

asJSON - Anonymous Data Objects

An anonymous data object, that is a data object created using CREATE DATA or the instance operator NEW, is displayed as an object component of %heap in the form:

"key":{ "%type":"...",
        "%maxLength":...,
        "%totalDigits":...,
        "%fractionDigits":...,
        "%val":...
      }

The name key is the key used to reference the anonymous data object. The value of key is itself an object whose object components represent the type and the value of the anonymous data object.

The values of the anonymous data object is specified as content of the component %val in its canonical representation. If the anonymous data object itself is a non-initial reference variable, it references another component of %heap.

The remaining components specify the data type of the anonymous data object.

-   The same rules apply to the content of %type as to the element name type in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_anonymous_data_object.htm).

-   The components %maxLength, %totalDigits, and %fractionDigits specify the technical attributes of the type (if required). The same rules apply to their content as to the corresponding attributes in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_anonymous_data_object.htm).

Executable Example

[asJSON for Anonymous Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_dref_abexa.htm).


### abenabap_asjson_class_instances.htm

---
title: "Executable Example"
description: |
  asJSON for Object References(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_oref_abexa.htm)
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_class_instances.htm"
abapFile: "abenabap_asjson_class_instances.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenabap", "asjson", "instances"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm) → 

asXML - Instances of Classes

To transform classes to [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_glosry.htm "Glossary Entry") using the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm), or to create classes from JSON data, their classes must implement the interface IF\_SERIALIZABLE\_OBJECT. The instance of a class (object) is displayed as an object component of the object %heap as follows:

"key":{ "%type":"class",
        "%val":{ "part":{ "%classVersion":"...",
                          "name":...
                          ...
                        }
                 ...
               }
      }

The name key is the key used to reference the object. The value of key is itself an object whose object components represent the class and the attributes of the referenced ABAP object.

-   The character-like value class of the component %TYPE specifies the class of the object. The same applies to class as to the element name class in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_class_instances.htm) representation. In asJSON, the namespace that specifies where the class is defined in asXML is resolved before the class name.

-   The component %VAL represents the attribute values of the object. The value of %VAL is itself an object. The components part are objects that contain the values of the instance attributes of individual object parts. The same applies to the object parts and their names part as to the subelements <part> in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_class_instances.htm) representation.

-   The components of an object part part represent the values of the instance attributes of the objects in their canonical representation, under their names. The same applies to the names as to the corresponding elements in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_class_instances.htm) representation. Static attributes are ignored.

-   An optional component, %classVersion, of an object part, part, contains the version of the class of the object part in character-like representation. The same applies to the version of the class as to the attribute classVersion in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_class_instances.htm) representation.

The [tag interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentag_interface_glosry.htm "Glossary Entry") IF\_SERIALIZABLE\_OBJECT has the same meaning for JSON as for [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_class_instances.htm). This means it defines which attributes of a class are serialized and helper methods can be implement that modify the behavior (see the [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserializable_object_abexa.htm)).

Executable Example

[asJSON for Object References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_oref_abexa.htm)


### abenabap_asxml_references.htm

---
title: "Note"
description: |
  -   The asJSON representation of reference variables and referenced objects is only of relevance for XSL(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm 'Glossary Entry') transformations and the identity transformation ID. You cannot currently use simple transfor
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm"
abapFile: "abenabap_asxml_references.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenabap", "asxml", "references"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Reference Variables and Objects

A reference mechanism is used (like in [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_references.htm)) for the asJSON display of anonymous data objects and class instances (objects), which are addressed using references in reference variables. As [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) does not suggest any syntax for references, an SAP-specific reference mechanism based on asXML is used.

-   Named reference variables are displayed as object components, whose content is usually a key for the referenced objects.

-   The referenced objects are stored as object components in the object [%heap](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm). This name corresponds to the key.

In addition to the value, the dynamic type of the reference variables is specified in the object components of %heap when serialization takes place. This ensures that deserialization is unambiguous.

-   [Named Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_reference_var.htm)

-   [Anonymous Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_anonym_do.htm)

-   [Class Instances](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_class_instances.htm)

Note

-   The asJSON representation of reference variables and referenced objects is only of relevance for [XSL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") transformations and the identity transformation ID. You cannot currently use simple transformations to transform reference variables.

-   For data references, the value "embedded" can be specified for the transformation option [data\_refs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation_options.htm) to define embedded storage in serializations instead of storage in the %heap object component.

Example

For information about the differences between serializing to %heap and embedded storage, see the executable example [Serializations to Heap or Embedded](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserialize_ref_heap_embed_abexa.htm).

Continue
[asJSON - Named Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_reference_var.htm)
[asJSON - Anonymous Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_anonym_do.htm)
[asXML - Instances of Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_class_instances.htm)


### abenabap_asjson_abap_types.htm

---
title: "Continue"
description: |
  asJSON - Mapping of Elementary ABAP Types(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm) asJSON - Mapping of Structures(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_struc.htm) asJSON - Mapping of Internal
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm"
abapFile: "abenabap_asjson_abap_types.htm"
keywords: ["do", "data", "types", "internal-table", "abenabap", "asjson", "abap"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) → 

asJSON - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asJSON as the content of the following object components:

[“bn1":...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)
["bn1":...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)
[...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)

An additional object is implemented for the objects referenced by reference variables:

["%heap":...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_general.htm)

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation; deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm)

-   [Mapping of Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_struc.htm)

-   [Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_table.htm)

-   [Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_enum.htm)

-   [Mapping of Reference Variables and Referenced Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm)

Continue
[asJSON - Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_elem.htm)
[asJSON - Mapping of Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_struc.htm)
[asJSON - Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_table.htm)
[asJSON - Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types_enum.htm)
[asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm)


### abenabap_asjson_schema.htm

---
title: "Note"
description: |
  By specifying format(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_option_format.htm) in the attribute option(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_option.htm) of the ST command tt:value(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_schema.htm"
abapFile: "abenabap_asjson_schema.htm"
keywords: ["do", "if", "try", "data", "types", "abenabap", "asjson", "schema"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) → 

asJSON - Mapping Additional XML Schema Data Types

In [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_glosry.htm "Glossary Entry"), apart from the XML schema data types needed to map elementary ABAP types, additional XML schema data types are supported by special [domains](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_schema.htm) called XSD....

asJSON, which is based on asXML, also supports these domains (with the exception of XSDQNAME). In serializations and deserializations from or to ABAP data objects typed with these domains, the same applies as to [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_schema.htm). Here, values from the domain XSDBOOLEAN are represented as real [Boolean JSON values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) in asJSON.

Note

By specifying [format](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_option_format.htm) in the attribute [option](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_option.htm) of the ST command [tt:value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenst_tt_value_elementary.htm), formats of this type can also be applied to ABAP data objects that are not typed with a domain of this type. In JSON, furthermore, the option attribute also makes it possible to convert ABAP data fields and time stamps to UNIX time stamps (or ticks) in the JSON format for OData.

Executable Example

[asJSON for Additional XML Schema Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_asjson_xsd_abexa.htm)
