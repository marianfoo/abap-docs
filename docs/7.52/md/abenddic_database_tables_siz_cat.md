  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [Table-Specific Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

Size Category of Database Tables

The size category determines the size of the initial memory reserved for the table on the database. Values between 0 and 9 can be specified. Expected volumes of rows from the table are assigned to these values.

Size Category

Expected Rows

0

0 to 3,600

1

3,600 to 14,000

2

14,000 to 58,000

3

58,000 to 230,000

4

230,000 to 930,000

5

930,000 to 1,800,000

6

1,800,000 to 3,700,000

7

3,700,000 to 7,400,000

8

7,400,000 to 14,000,000

9

14,000,000 to 590,000,000

If the initial space reserved is exceeded, a new memory area is added implicitly in accordance with the chosen size category.

Note

A size category must be chosen that does not create too many small memory areas and no memory areas that are too big.