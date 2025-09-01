  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Types and Objects - Overview](javascript:call_link\('abentypes_objects_oview.htm'\)) →  [Data Objects](javascript:call_link\('abendata_objects.htm'\)) → 

Byte Order

The byte order determines the order in which bytes of specific data objects are stored in the memory.

Binary Representation of Numbers

The binary representation of numbers with the ABAP type i, int8, decfloat16, decfloat34, f, and s is hardware-dependent. The byte order, which is pre-defined by the processor of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"), is important: It determines whether the highest-value byte or lowest-value byte is stored first. In the case of the highest-value byte, the binary display is referred to as [big endian](javascript:call_link\('abenbig_endian_glosry.htm'\) "Glossary Entry") and in the case of the lowest-value byte, the display is known as [little endian](javascript:call_link\('abenlittle_endian_glosry.htm'\) "Glossary Entry").

Note

The byte order of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") can be derived from the static attribute ENDIAN in the [system class](javascript:call_link\('abensystem_class_glosry.htm'\) "Glossary Entry") CL\_ABAP\_CHAR\_UTILITIES.

Example

You can represent the number 16909060 (in hexadecimal notation) as follows:

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

In the [Unicode](javascript:call_link\('abenunicode_glosry.htm'\) "Glossary Entry") format [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry"), supported by the ABAP programming language, characters are represented using 2-byte unsigned integer values. This means that this format depends on the number representation used by the hardware. Thus you must differentiate between UCS-2BE (big endian) and UCS-2LE (little endian).

Container Problems

Character-like or byte-like data objects of the type c or string, or x or xstring, are often used as anonymous containers for data objects, especially structures, and stored persistently.

If a container is saved and imported from an [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") whose [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") has a different byte order, problems can occur if the container is used for content for which the byte order is critical. This is always the case when numeric content of the type i, int8, decfloat16, decfloat34, f, or s is stored in character-like or byte-like containers. Problems can also arise when byte-like content is saved in character-like containers.

Usually, to be able to work with the contents of an imported container, a [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry") is performed on the data type whose data is stored in the container. However, because no type information is stored in the container, any necessary conversion of the byte order cannot take place.

The only way to prevent these problems arising is to avoid having numeric components in anonymous containers and never store byte-like contents in character-like fields.

Note

The statement [EXPORT](javascript:call_link\('abapexport_data_cluster.htm'\)) ... TO [DATA BUFFER](javascript:call_link\('abapexport_data_cluster_medium.htm'\)) can be used to save ABAP data in byte strings. If imported using the statement [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)), the byte order is handled automatically.