  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Dependent Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_techspec.htm) → 

DDIC - Size Category of Database Tables

The size category affects the size of the initial memory area reserved for the table on the database. Values between 0 and 9 can be specified and intervals of expected rows are assigned to these values. The interval limits assigned to each size category depend on the structure of the DDIC database table. The range can extend from approximately 1000 rows in size category 0 to several million rows in size category 9. If the initial space reserved is exceeded, a new memory area is added implicitly in accordance with the chosen size category.

Hints

-   In transaction SE11, the [input help](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninput_help_glosry.htm "Glossary Entry") for Size Category in technical settings shows the interval limits valid for the current DDIC database table.
-   A size category must be chosen that does not create too many small memory areas and no memory areas that are too big.

Example

The following table shows the interval limits of the DDIC database table SPFLI assigned to each size category

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