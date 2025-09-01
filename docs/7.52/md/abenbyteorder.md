---
title: "Byte Order"
description: |
  The byte order determines the order in which bytes of specific data objects are stored in the memory. Binary Representation of Numbers The binary representation of numbers with the ABAP type i, int8, decfloat16, decfloat34, f, and s is hardware-dependent. The byte order, which is predefined by the p
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyteorder.htm"
abapFile: "abenbyteorder.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenbyteorder"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_and_objects.htm) →  [Types and Objects - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentypes_objects_oview.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects.htm) → 

Byte Order

The byte order determines the order in which bytes of specific data objects are stored in the memory.

Binary Representation of Numbers

The binary representation of numbers with the ABAP type i, int8, decfloat16, decfloat34, f, and s is hardware-dependent. The byte order, which is predefined by the processor, is important and determines whether the highest-value byte or lowest-value byte is stored first. In the case of the highest-value byte, the binary display is referred to as [big endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbig_endian_glosry.htm "Glossary Entry") and in the case of the lowest-value byte, the display is known as [little endian](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlittle_endian_glosry.htm "Glossary Entry").

Example

The number 16909060 can be represented using the following byte sequences (in hexadecimal notation):

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

The most common processors are Intel and DEC alpha, both of which use little endian. Most other processors use big endian.

Binary Representation of Characters

In the [Unicode](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_glosry.htm "Glossary Entry") format [UCS-2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenucs2_glosry.htm "Glossary Entry"), supported by the ABAP programming language, characters are represented using 2-byte unsigned integer values. This means that this format depends on the number representation used by the hardware. This means that UCS-2BE (big endian) must be distinguished from UCS-2LE (little endian).

Container Problems

Character-like or byte-like data objects of the type c or string, or x or xstring, are often used as anonymous containers for data objects, especially structures, and stored persistently.

If a container like this is stored and imported on an [application server](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_server_glosry.htm "Glossary Entry") with a different byte order, problems can arise if the container is used for content for which the byte order is important. This is always the case when numeric content of the type i, int8, decfloat16, decfloat34, f, or s is stored in character-like or byte-like containers. Problems can also arise when byte-like content is saved in character-like containers.

Usually, to be able to work with the contents of an imported container, a [casting](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencast_casting_glosry.htm "Glossary Entry") is performed on the data type whose data is stored in the container. However, because no type information is stored in the container, any necessary conversion of the byte order cannot take place.

The only way to prevent these problems arising is to avoid having numeric components in anonymous containers and never store byte-like contents in character-like fields.

Note

The statement [EXPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster.htm) ... TO [DATA BUFFER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexport_data_cluster_medium.htm) can be used to save ABAP data in byte strings. If imported using the statement [IMPORT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapimport_data_cluster.htm), the byte order is handled automatically.