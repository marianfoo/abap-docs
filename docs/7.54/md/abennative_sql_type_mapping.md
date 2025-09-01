  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Native SQL](javascript:call_link\('abennative_sql.htm'\)) → 

Native SQL - Mapping of ABAP Types

In Native SQL, data can be transferred from the database to ABAP data objects in reads, and the other way round in the case of writes.

-   In [ADBC](javascript:call_link\('abenadbc.htm'\)), ABAP data objects are bound using data references.

-   ABAP data objects are specified as [host variables](javascript:call_link\('abapexec_host.htm'\)) after [EXEC SQL](javascript:call_link\('abapexec.htm'\)).

In assignments between ABAP data objects and fields in database tables, the ABAP data objects are bound to the database fields using the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry"). ABAP data objects should usually only be bound to suitable database fields. The following tables show which elementary ABAP types match which HANA types, using the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") as an example. There are similar assignments for other database systems.

Numeric Types

ABAP Type

HANA Type

b

SMALLINT

s

SMALLINT

i

INTEGER

int8

BIGINT

p, length leng with dec decimal places

DECIMAL, length 2len-1 with dec decimal places

decfloat16

SMALLDECIMAL, length 16;
VARBINARY, length 8

decfloat34

DECIMAL, length 34;
VARBINARY, length 16

f

DOUBLE

Character-Like Types

ABAP Type

HANA Type

c, length len

NVARCHAR, length len

string

NCLOB

n, length len

NVARCHAR, length len

Byte-Like Types

ABAP Type

HANA Type

x, length len

VARBINARY, length len

xstring

BLOB

Date Types, Time Types, and Time Stamp Types

ABAP Type

HANA Type

d

DATE;
NVARCHAR, length 8

t

TIME;
NVARCHAR, length 6

utclong

TIMESTAMP

If the data types match, content can be passed unchanged without being checked. In all other cases, conversions are necessary. These conversions and the necessary checks are executed by the Native SQL interface. The conversions take place in the platform-dependent part (Client Library) of the Native SQL interface, and the following problems can occur:

-   Unexpected conversion results

-   Cut off or pad values for character-like and byte-like types

-   Conversion rules different to those in ABAP

-   SQL errors that raise exceptions

For this reason, conversions in the Native SQL interface should be avoided if possible. This is particularly relevant for the ABAP types n, d, and t and decimal floating point numbers.

Note

Unlike Native SQL, [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") respects the column types of database tables and views defined in the ABAP Dictionary. These are based on the [built-in data types of the ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)), which can all be mapped to a [built-in ABAP type](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry"). Therefore, the ABAP SQL interface can also execute platform-independent conversions between incompatible data types if they correspond to the conversion rules in ABAP. For example, see the [assignment rules](javascript:call_link\('abenselect_into_conversion.htm'\)) for reads.

Example

The example shows that if the data of a column with type NUMC is assigned in Native SQL to a host variable with the ABAP type n that is too short, it is truncated on the right, but the [rule](javascript:call_link\('abenselect_into_conversion.htm'\)) that is applied in ABAP SQL passes the data right-justified and truncated on the left.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' numc1 = '123' ) ).
DATA host TYPE n LENGTH 5.
SELECT SINGLE numc1 FROM demo\_expressions INTO (@host).
cl\_demo\_output=>write( |ABAP SQL:   { host }| ).
EXEC SQL.
  SELECT numc1 FROM demo\_expressions INTO :host
ENDEXEC.
cl\_demo\_output=>display( |Native SQL: { host }| ).

The result in an SAP HANA database is:

ABAP SQL:   00123
Native SQL 00000

Example

The example shows that if a host variable with ABAP type n that is too long is assigned to a column with type NUMC in Native SQL, an exception occurs. The [conversion rule](javascript:call_link\('abenconversion_type_n.htm'\)) that is applied in ABAP SQL, however, passes the data right-justified and truncated on the left.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X' ) ).
DATA host TYPE n LENGTH 15 VALUE '111112222233333'.
UPDATE demo\_expressions SET numc1 = @host WHERE id = 'X'.
SELECT SINGLE numc1 FROM demo\_expressions INTO @DATA(result).
cl\_demo\_output=>write( |ABAP SQL: \\n{ result }| ).
TRY.
    EXEC SQL.
      UPDATE demo\_expressions SET numc1 = :host WHERE id = 'X'
    ENDEXEC.
  CATCH cx\_sy\_native\_sql\_error INTO DATA(exc).
    cl\_demo\_output=>write( |Native SQL: \\n{ exc->get\_text( ) }| ).
ENDTRY.
cl\_demo\_output=>display( ).

The result in an SAP HANA database is:

ABAP SQL:
2222233333
Native SQL
An SQL error has occurred: inserted value too large for column