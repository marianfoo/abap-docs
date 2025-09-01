---
title: "Byte Order"
description: |
  The byte order determines the order in which bytes of specific data objects are stored in the memory. Binary Representation of Numbers The binary representation of numbers with the ABAP type i, int8, decfloat16, decfloat34, f, and s is hardware-dependent. An important part of this is the byte order,
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbyteorder.htm"
abapFile: "abenbyteorder.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abenbyteorder"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_and_objects.htm) →  [Types and Objects, Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_objects.htm) → 

Byte Order

The byte order determines the order in which bytes of specific data objects are stored in the memory.

Binary Representation of Numbers

The binary representation of numbers with the ABAP type i, int8, decfloat16, decfloat34, f, and s is hardware-dependent. An important part of this is the byte order, which is pre-defined by the processor of the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") on the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry"), is important: It determines whether the highest-value byte or lowest-value byte is stored first in the memory. In the case of the highest-value byte, the binary representation is referred to as [big endian](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbig_endian_glosry.htm "Glossary Entry") and in the latter case, the representation is known as [little endian](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlittle_endian_glosry.htm "Glossary Entry").

Hint

The byte order of the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry") can be taken from the static attribute ENDIAN in the [system class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_class_glosry.htm "Glossary Entry") [CL\_ABAP\_CHAR\_UTILITIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_char_utilities.htm).

Example

The number 16909060 in hexadecimal notation can be represented by the following byte strings:

Endian

Byte 1

Byte 2

Byte 3

Byte 4

Big

"0x01"

"0x02"

"0x03"

"0x04"

Little

"0x04"

"0x03"

"0x02"

"0x01"

The most common processors that use little endian representations are Intel and DEC alpha. Most other processors use big endian.

Binary Representation of Characters

Characters are represented by unsigned 2-byte integer values in the [Unicode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_glosry.htm "Glossary Entry") format [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry"), that is supported by the ABAP programming language. This means that this format depends on the number representation used by the hardware. A distinction is therefore made between UCS-2BE (big endian) and UCS-2LE (little endian).

Container Problems

Character-like or byte-like data objects of the type c or string, or x or xstring, are often used as anonymous containers for data objects, in particular structures, and stored persistently.

If such a container is stored and imported from an [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry") whose [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") has a different byte order, problems can occur if the container is used for content for which the byte order is critical. This is always the case when numeric content of the type i, int8, decfloat16, decfloat34, f, or s is stored in character-like or byte-like containers. Problems can also arise when byte-like content is stored in character-like containers.

Usually, in order to be able to work with the contents of an imported container, a [casting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencast_casting_glosry.htm "Glossary Entry") is performed on the data type whose data is stored in the container. However, because no type information is stored in the container, any necessary conversion of the byte order cannot take place.

The only way to prevent these problems is to avoid having numeric components in anonymous containers and never store byte-like contents in character-like fields.

Hint

The statement [EXPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster.htm) ... TO [DATA BUFFER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapexport_data_cluster_medium.htm) can be used to store ABAP data in byte strings. When the statement [IMPORT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapimport_data_cluster.htm) is used, the byte order is handled automatically.